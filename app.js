require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function getQuote() {
    return fetch("https://zenquotes.io/api/random")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data[0]["q"] + " -" + data[0]["a"];
        });
}

client.on("message", (msg) => {
    if (msg.content === "/commands") {
        msg.channel.send("\n/ping - replies 'pong'\n" + "/inspire - gives you a motivational quote\n");
    }
});

client.on("message", (msg) => {
    if (msg.author.bot) return;

    if (msg.content === "/inspire") {
        getQuote().then((quote) => msg.channel.send(quote));
    }
});

client.on("message", (msg) => {
    if (msg.content === "/destruct") {
        for (i = 5; i >= 0; i--) {
            if (i > 0) {
                msg.channel.send(`count down in ${i}`);
            } else msg.channel.send("boom");
        }
    }
});

client.on("message", (msg) => {
    if (msg.content === "/ping") {
        msg.channel.send("pong");
    }
});

// Create an event listener for new guild members
client.on("guildMemberAdd", (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find((ch) => ch.name === "welcome-channel");
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to tech hangouts!, ${member}`);
});

client.login(process.env.TOKEN);
