const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

async function getQuote() {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    return data[0]["q"] + " -" + data[0]["a"];
}

module.exports = {
    data: new SlashCommandBuilder().setName("insp").setDescription("Replies with an inspirational quote"),
    async execute(interaction) {
        await getQuote()
            .then((quote) => interaction.reply(quote))
            .catch((err) => console.log(err));
    },
};
