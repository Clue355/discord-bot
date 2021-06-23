import { CommandInt } from "../interfaces/commandInt";
import CamperModel from "../database/models/model";
import { MessageEmbed } from "discord.js";

export const view: CommandInt = {
    name: "prog",
    description: "view your 100 days of code progress!",
    run: async (message) => {
        const { author, channel } = message;
        const camperEmbed = new MessageEmbed();

        const channels = ["857351346584158228", "836302862094696448"];
        // 100 channel "857351346584158228" test channel "836302862094696448";
        if (!channels.includes(message.channel.id)) {
            camperEmbed.setTitle("OOPS There Was An Error");
            camperEmbed.setDescription("Try using this code in 100-days-of-code");
            await channel.send(camperEmbed);
            await message.delete();
            return;
        }

        const targetCamperData = await CamperModel.findOne({ discordId: author.id });
        if (!targetCamperData) {
            await channel.send("You have not started the challenge yet. Use the /100 command to start the challenge!");
            return;
        }

        camperEmbed.setTitle("My 100DoC Progress");
        camperEmbed.setDescription(
            `Here is my 100 Days of Code progress. You reported an update on ${new Date(
                targetCamperData.timestamp,
            ).toLocaleDateString()}.`,
        );
        camperEmbed.addField("Round", targetCamperData.round, true);
        camperEmbed.addField("Day", targetCamperData.day, true);
        camperEmbed.setAuthor(author.username + "#" + author.discriminator, author.displayAvatarURL());

        await channel.send(camperEmbed);
        await message.delete();
    },
};
