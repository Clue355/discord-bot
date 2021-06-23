import { CommandInt } from "../interfaces/commandInt";
import CamperModel from "../database/models/model";
import { MessageEmbed } from "discord.js";

export const edit: CommandInt = {
    name: "edit",
    description:
        "Edit a previous 100 day post. Note: you will have to enter a message ID after the command. Make sure to enable developer tools in settings",
    run: async (message) => {
        const { author, channel, content } = message;
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

        const [, targetId, ...text] = content.split(" ");
        const targetMessage = await channel.messages.fetch(targetId);

        if (!targetMessage) {
            await channel.send("That does not appear to be a valid message ID.");
            return;
        }

        const targetEmbed = targetMessage.embeds[0];

        if (targetEmbed.author?.name !== author.username + "#" + author.discriminator) {
            await channel.send("This does not appear to be your 100 Days of Code post. You cannot edit it.");
            return;
        }

        targetEmbed.setDescription(text.join(" "));
        await targetMessage.edit(targetEmbed);
        await message.delete();
    },
};
