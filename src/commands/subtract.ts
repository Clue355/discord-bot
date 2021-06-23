import { CommandInt } from "../interfaces/commandInt";
import CamperModel from "../database/models/model";
import { MessageEmbed } from "discord.js";

export const sub: CommandInt = {
    name: "sub",
    description: "Subtract a day from 100Doc if you accidently added a day",
    run: async (message) => {
        const { author, channel } = message;
        const oneHundredEmbed = new MessageEmbed();

        const channels = ["857351346584158228", "836302862094696448"];
        // 100 channel "857351346584158228" test channel "836302862094696448";
        if (!channels.includes(message.channel.id)) {
            oneHundredEmbed.setTitle("OOPS There Was An Error");
            oneHundredEmbed.setDescription("Try using this code in 100-days-of-code");
            await channel.send(oneHundredEmbed);
            await message.delete();
            return;
        }

        let targetCamperData = await CamperModel.findOne({ discordId: author.id });
        if (!targetCamperData) {
            await channel.send("You have not started the challenge yet. Use the /100 command to start the challenge!");
            return;
        }
        if (targetCamperData.day == 0) {
            await channel.send("You have zero days and cannot subtract anymore");
            return;
        }

        targetCamperData.day--;
        await targetCamperData.save();

        oneHundredEmbed.setAuthor(author.username + "#" + author.discriminator, author.displayAvatarURL());
        oneHundredEmbed.setDescription("Succesfully subtracted a day!");
        oneHundredEmbed.addField("Round", targetCamperData.round, true);
        oneHundredEmbed.addField("Day", targetCamperData.day, true);

        await channel.send(oneHundredEmbed);

        await message.delete();
    },
};
