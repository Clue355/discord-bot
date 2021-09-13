const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const { CLIENT, GUILD, TOKEN } = require("dotenv").config();

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

try {
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
} catch (error) {
    console.error(error);
} finally {
    console.log("Commands Sucessfully Registered!");
}
