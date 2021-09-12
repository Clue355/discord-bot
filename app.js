// require("dotenv").config();
// const Discord = require("discord.js");
// const client = new Discord.Client();
// const fetch = require("node-fetch");

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// function getQuote() {
//     return fetch("https://zenquotes.io/api/random")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             return data[0]["q"] + " -" + data[0]["a"];
//         });
// }

// function getJoke() {
//     return fetch("https://official-joke-api.appspot.com/random_joke")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             return data["setup"] + " " + data["punchline"];
//         });
// }

// function jobquery(cat, limit, msg) {
//     return fetch(`https://remotive.io/api/remote-jobs?category=${cat}&limit=${limit}`).then((res) => {
//         return res.json().then((data) => {
//             return msg.channel.send(
//                 `**Title:** ${jobs[i].title}\n` +
//                     `**Company:** ${jobs[i].company_name}\n` +
//                     `**Job Type:** ${jobs[i].job_type}\n` +
//                     `**Location:** ${jobs[i].candidate_required_location}\n` +
//                     `**Salary:** ${jobs[i].salary}\n` +
//                     `**Description:** ${jobs[i].description.match(regex)}\n` +
//                     `**Link:** ${jobs[i].description.match(linkRegex)}\n`,
//             );
//         });
//     });
// }

// client.on("message", async (msg) => {
//     if (msg.author.bot) return;
//     //commands
//     if (msg.content === "/commands") {
//         msg.channel.send(
//             "\n**/ping:** *replies 'pong'*\n" +
//                 "**/insp:** *gives you a motivational quote*\n" +
//                 "**/joke:** *tells you a joke!*\n" +
//                 "**/boom:** *create an explosion*\n" +
//                 "**/hi:** *the bot will greet you*\n" +
//                 "**/goh:** *gif of scorpion*\n" +
//                 "**/?jobs:** *for instructions on the job command*",
//         );
//     }

//     //jobs
//     if (msg.content === "/?jobs") {
//         msg.channel.send(
//             "**command:** `/jobs category limit`\n" +
//                 "> Please replace the paramaters after jobs with your preferences\n" +
//                 "> and include 1 space inbetween. ***All jobs are remote!***\n" +
//                 "**catergory:** *software-dev, design, data, devops, qa, all-others*\n" +
//                 "**limit:** *number of posts you want return. please just give a number. Limit is 10*",
//         );
//     }

//     //greeting
//     if (msg.content === "/hi") {
//         msg.reply("Hi!");
//     }

//     //ping pong
//     if (msg.content === "/ping") {
//         msg.channel.send("pong");
//     }

//     //quotes
//     if (msg.content === "/insp") {
//         getQuote().then((quote) => msg.channel.send(quote));
//     }

//     //jokes
//     if (msg.content === "/joke") {
//         getJoke().then((joke) => msg.channel.send(joke));
//     }

//     // coh
//     if (msg.content === "/goh") {
//         getJoke().then((joke) => msg.channel.send("https://media4.giphy.com/media/rIa2LxrCKxMz3oOEtH/giphy.gif"));
//     }

//     //explosion
//     if (msg.content === "/boom") {
//         i = 3;

//         let time = setInterval(countdown, 1000);
//         function countdown() {
//             msg.channel.send(`explosion in ${i}`);
//             if (i < 0) {
//                 clearInterval(time);
//             }
//             i--;
//             if (i == 0) {
//                 msg.channel.send("https://thumbs.gfycat.com/KindSerpentineCuckoo-size_restricted.gif");
//                 clearInterval(time);
//                 return;
//             }
//         }
//     }

//     let word = "/jobs";
//     if (msg.content.includes(word)) {
//         // const channel = if(ch.name === "bot-job-search";
//         let chan = "837178956478152714";
//         if (chan != msg.channel.id) {
//             msg.channel.send("> sorry, can't in this channel.\n> try this in **bot-job-search**");
//             return;
//         }

//         let string = msg.content;
//         let split_string = string.split(" ");
//         let regex = new RegExp(/>([a-zA-Z:’%,. -]+)</);
//         let linkRegex = new RegExp(/>(https:\W+[a-z.]+\W[a-zA-Z0-9]+)</);
//         let categories = ["software-dev", "design", "data", "devops", "qa", "all-others"];
//         if (!split_string[1] in categories) return;
//         if (isNaN(split_string[2]) || split_string[2] > 10) return;
//         jobquery(split_string[1], split_string[2], msg.channel);
//*         // msg.channel.send(
//*         //     `**Title:** ${jobs[i].title}\n` +
//*         //         `**Company:** ${jobs[i].company_name}\n` +
//*         //         `**Job Type:** ${jobs[i].job_type}\n` +
//*         //         `**Location:** ${jobs[i].candidate_required_location}\n` +
//*         //         `**Salary:** ${jobs[i].salary}\n` +
//*         //         `**Description:** ${jobs[i].description.match(regex)}\n` +
//*         //         `**Link:** ${jobs[i].description.match(linkRegex)}\n`,
//*         // );
//     }
// });

// // Create an event listener for new guild members
// client.on("guildMemberAdd", (member) => {
//     // Send the message to a designated channel on a server:
//     const channel = member.guild.channels.cache.find((ch) => ch.name === "welcome-channel");
//     // Do nothing if the channel wasn't found on this server
//     if (!channel) return;
//     // Send the message, mentioning the member
//     channel.send(`Welcome to tech hangouts!, ${member}`);
// });

// client.login(process.env.TOKEN);
