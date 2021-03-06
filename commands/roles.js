const { SlashCommandBuilder } = require("@discordjs/builders");
const { InteractionResponseType } = require("discord-api-types/v9");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("roles").setDescription("Replies with roles to pick"),
    /**
     *        .addUserOption((option) => option.setName("target").setDescription("to show the targeted user's tag"))
     */
    async execute(interaction) {
        const buttonEmb = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Pick Your Roles!")
            .setAuthor(interaction.user.tag);

        const ga_role = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("GA").setLabel("GA Student").setStyle("DANGER"),
        );
        const helper_role = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("CH").setLabel("Code Helper").setStyle("SUCCESS"),
        );
        interaction.reply({ embeds: [buttonEmb], components: [ga_role, helper_role] });
    },
};
