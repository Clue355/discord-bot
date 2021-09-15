const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("halp").setDescription("Replies with commands"),
    async execute(interaction) {
        const commandEmb = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commands")
            .addField("/ping", "Replies with pong!", true)
            .addField("/hi", "Replies with Hi!", true)
            .addField("/insp", "Replies with an inspirational quote", true)
            .addField("/joke", "Replies with a programming joke", true)
            .addField("/roles", "Replies with roles you can assign yourself", true);
        await interaction.reply({ embeds: [commandEmb] });
    },
};
