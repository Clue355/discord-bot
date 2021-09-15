const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

async function getMeme() {
    const response = await fetch("https://meme-api.herokuapp.com/gimme");
    const data = await response.json();
    const memeEmb = new MessageEmbed().setColor("#0099ff").setTitle(data["title"]).setImage(data["url"]);
    return memeEmb;
}

module.exports = {
    data: new SlashCommandBuilder().setName("meme").setDescription("Replies with a dankmeme"),
    async execute(interaction) {
        const emb = await getMeme();
        interaction.reply({ embeds: [emb] });
    },
};
