const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

async function getJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await response.json();
    if (data["delivery"]) {
        return data["setup"] + " " + data["delivery"];
    }
    return data["joke"];
}

module.exports = {
    data: new SlashCommandBuilder().setName("joke").setDescription("Replies with a joke"),
    async execute(interaction) {
        await getJoke()
            .then((joke) => interaction.reply(joke))
            .catch((err) => console.log(err));
    },
};
