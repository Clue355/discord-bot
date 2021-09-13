require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

async function getQuote() {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    return data[0]["q"] + " -" + data[0]["a"];
}

// return fetch("https://zenquotes.io/api/random")
// .then((res) => {
//     return res.json();
// })        "prestart": "npm install",
// .then((data) => {
//     return data[0]["q"] + " -" + data[0]["a"];
// });

async function getJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await response.json();
    if (data["delivery"]) {
        return data["setup"] + " " + data["delivery"];
    }
    return data["joke"];
}

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    //commands
    if (commandName === "halp") {
        const commandEmb = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Commands")
            .addField("/ping", "Replies with pong!", true)
            .addField("/hi", "Replies with Hi!", true)
            .addField("/insp", "Replies with an inspirational quote", true)
            .addField("/joke", "Replies with a programming joke", true);
        await interaction.reply({ embeds: [commandEmb] });
    }

    //greeting
    if (commandName === "hi") {
        await interaction.reply("Hi!");
    }

    //ping pong
    if (commandName === "ping") {
        await interaction.reply("pong");
    }

    //quotes
    if (commandName === "insp") {
        await getQuote()
            .then((quote) => interaction.reply(quote))
            .catch((err) => console.log(err));
    }

    //jokes
    if (commandName === "joke") {
        await getJoke()
            .then((joke) => interaction.reply(joke))
            .catch((err) => console.log(err));
    }

    //explosion
    if (commandName === "boom") {
        i = 3;

        let time = setInterval(countdown, 1000);
        function countdown() {
            interaction.reply(`explosion in ${i}`);
            if (i < 0) {
                clearInterval(time);
            }
            i--;
            if (i == 0) {
                interaction.reply("https://thumbs.gfycat.com/KindSerpentineCuckoo-size_restricted.gif");
                clearInterval(time);
                return;
            }
        }
    }
});

client.login(process.env.TOKEN);
