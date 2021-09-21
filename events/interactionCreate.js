module.exports = {
    name: "interactionCreate",
    execute(interaction, AssignRoles) {
        const member = interaction.member;
        if (interaction.customId === "GA") {
            const user = interaction.message.interaction.user.id;
            const role = "885696925838479460";
            if (member.roles.cache.some((role) => role.name === "GA Student")) {
                member.roles.remove(role);
                interaction.update({ content: `${interaction.user.tag} Your role has been removed` });
                return;
            }
            member.roles.add(role);
            interaction.update({ content: `GA Role Given To ${interaction.user.tag}` });
        }
        if (interaction.customId === "CH") {
            const user = interaction.message.interaction.user.id;
            const role = "889996083772686367";
            if (member.roles.cache.some((role) => role.name === "Code Helper")) {
                member.roles.remove(role);
                interaction.update({ content: `${interaction.user.tag} Your role has been removed` });
                return;
            }
            member.roles.add(role);
            interaction.update({ content: `Code Helper Role Given To ${interaction.user.tag}` });
        }
    },
};
