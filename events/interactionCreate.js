module.exports = {
    name: "interactionCreate",
    execute(interaction, AssignRoles) {
        console.log(JSON.stringify(interaction));
        const member = interaction.member;
        if (interaction.customId === "GA") {
            const user = interaction.message.interaction.user.id;
            console.log(interaction.GuildMember);
            const role = "885696925838479460";
            if (member.roles.cache.some((role) => role.name === "GA STUDENT")) {
                member.roles.remove(role);
                interaction.reply(`${interaction.user.tag} Your role has been removed`);
                return;
            }
            member.roles.add(role);
            interaction.reply(`GA Role Given To ${interaction.user.tag}`);
        }
    },
};
