require("dotenv").config();
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
// const { clientId, guildId, token } = require("./config.json");

const commands = [
    new SlashCommandBuilder().setName("ping").setDescription("Replies with pong!"),
    new SlashCommandBuilder().setName("halp").setDescription("Replies with commands"),
    new SlashCommandBuilder().setName("hi").setDescription("Bot says Hi!"),
    new SlashCommandBuilder().setName("insp").setDescription("Replies with an inspirational quote"),
    new SlashCommandBuilder().setName("joke").setDescription("Replies with a joke"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD), { body: commands });

        console.log("Successfully registered application commands.");
    } catch (error) {
        console.error(error);
    }
})();
