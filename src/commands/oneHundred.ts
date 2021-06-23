import { CommandInt } from "../interfaces/commandInt";
import CamperModel from "../database/models/model";
import { MessageEmbed } from "discord.js";

export const oneHundred: CommandInt = {
    name: "100",
    description: "Tracks when and how many days you've completed in your personal challenge",
    run: async (message) => {
        const { author, channel, content } = message;
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

        const text = content.split(" ").slice(1).join(" ");
        let targetCamperData = await CamperModel.findOne({ discordId: author.id });
        if (!targetCamperData) {
            targetCamperData = await CamperModel.create({
                discordId: author.id,
                round: 1,
                day: 0,
                timestamp: Date.now(),
            });
        }
        targetCamperData.day++;
        if (targetCamperData.day > 100) {
            targetCamperData.day = 1;
            targetCamperData.round++;
        }
        targetCamperData.timestamp = Date.now();
        await targetCamperData.save();

        oneHundredEmbed.setDescription(text);
        oneHundredEmbed.setAuthor(author.username + "#" + author.discriminator, author.displayAvatarURL());
        oneHundredEmbed.addField("Round", targetCamperData.round, true);
        oneHundredEmbed.addField("Day", targetCamperData.day, true);
        oneHundredEmbed.setFooter("Day completed: " + new Date(targetCamperData.timestamp).toLocaleDateString());

        await channel.send(oneHundredEmbed);

        await message.delete();
    },
};
