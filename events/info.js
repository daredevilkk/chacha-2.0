module.exports = {
    name: 'interactionCreate',

    async execute(interaction) {

        if (!interaction.isButton()) return;

        if (interaction.customId === 'commands') {
            await interaction.reply({
                content: '📚 Commands\n\n!ping\n!help\n!members',
                ephemeral: true
            });
        }

        if (interaction.customId === 'server') {
            await interaction.reply({
                content: `👥 Members: ${interaction.guild.memberCount}`,
                ephemeral: true
            });
        }

        if (interaction.customId === 'about') {
            await interaction.reply({
                content: '🤖 Chacha Bot\nDeveloper: Kishor',
                ephemeral: true
            });
        }
    }
};