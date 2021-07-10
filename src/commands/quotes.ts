// import { CommandInt } from "../interfaces/commandInt";
// import { MessageEmbed } from "discord.js";

// export const quotes: CommandInt = {
//     name: "moti",
//     description: "Get a motivational quote",
//     run: async (message) => {
//         const quoteEmbed = new MessageEmbed();

//         const response = async () => {
//             fetch("https://zenquotes.io/api/random")
//                 .then((res) => res.json())
//                 .then((res) => {
//                     return res[0]["q"] + " -" + res[0]["a"];
//                 });
//         };

//         quoteEmbed.setDescription(response);
//         await message.channel.send(quoteEmbed);
//         await message.delete();
//     },
// };
