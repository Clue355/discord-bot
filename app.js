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

function getJoke() {
    return fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data["setup"] + " " + data["punchline"];
        });
}

function jobquery(first, second, third) {
    return fetch("");
}

client.on("message", (msg) => {
    if (msg.author.bot) return;
    //commands
    if (msg.content === "/commands") {
        msg.channel.send(
            "\n/ping - replies 'pong'\n" +
                "/insp - gives you a motivational quote\n" +
                "/joke - tells you a joke!\n" +
                "/boom - create an explosion\n" +
                "/hi - the bot will greet you\n" +
                "/?jobs - for instructions on the job command",
        );
    }

    //jobs
    if (msg.content === "/?jobs") {
        msg.channel.send("command: /jobs job_type category limit");
    }

    //greeting
    if (msg.content === "/hi") {
        msg.reply("Hi!");
    }

    //ping pong
    if (msg.content === "/ping") {
        msg.channel.send("pong");
    }

    //quotes
    if (msg.content === "/insp") {
        getQuote().then((quote) => msg.channel.send(quote));
    }

    //jokes
    if (msg.content === "/joke") {
        getJoke().then((joke) => msg.channel.send(joke));
    }

    //explosion
    if (msg.content === "/boom") {
        i = 3;

        let time = setInterval(countdown, 1000);

        function countdown() {
            msg.channel.send(`explosion in ${i}`);
            i--;
            if (i == 0) {
                msg.channel.send("https://thumbs.gfycat.com/KindSerpentineCuckoo-size_restricted.gif");
                clearInterval(time);
                return;
            }
        }
    }

    let word = "/jobs";
    if (msg.content.includes(word)) {
        let string = msg.content;
        let first_arg = string.match(/\Wjobs\s(\w+)\s/);
        let sec_arg = string.match(/\Wjobs\s\w+\s(\d+)/);
        let th_arg = string.match(/\Wjobs\s\w+\s\d+\s([a-zA-z ]+)/);
        console.log(first_arg[1], sec_arg[1], th_arg[1]);
        // jobquery(first_arg[1], sec_arg[1], th_arg[1]);
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
