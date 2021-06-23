import { CommandInt } from "../interfaces/commandInt";
import { CommandList } from "./_CommandList";
import { MessageEmbed } from "discord.js";

export const help: CommandInt = {
    name: "halp",
    description: "Returns info on available commands",
    run: async (message) => {
        const helpEmbed = new MessageEmbed();
        helpEmbed.setTitle("Available Commands!");
        helpEmbed.setDescription("Remember to add a slash (/) in front of your commands and spell them correctly!");
        helpEmbed.addField("Commands:", CommandList.map((el) => `\`/${el.name}\`: ${el.description}`).join("\n"));
        await message.channel.send(helpEmbed);
    },
};
