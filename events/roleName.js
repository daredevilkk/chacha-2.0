const fs = require('fs');

module.exports = {
    name: 'messageCreate',

    async execute(message) {

        if (message.author.bot) return;

        // XP SYSTEM
        const data = JSON.parse(
            fs.readFileSync('./events/data/user.json', 'utf8')
        );

        const userId = message.author.id;
        console.log(
    message.author.username,
    message.author.id
);

        if (!data[userId]) {
            data[userId] = {
                xp: 0
            };
        }

        data[userId].xp += 5;

        fs.writeFileSync(
            './events/data/user.json',
            JSON.stringify(data, null, 2)
        );

        // HELP COMMAND
        const {
            ActionRowBuilder,
            ButtonBuilder,
            ButtonStyle
        } = require('discord.js');

        if (message.content === '!help') {

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('commands')
                        .setLabel('📚 Commands')
                        .setStyle(ButtonStyle.Primary),

                    new ButtonBuilder()
                        .setCustomId('server')
                        .setLabel('👥 Server Info')
                        .setStyle(ButtonStyle.Success),

                    new ButtonBuilder()
                        .setCustomId('about')
                        .setLabel('🤖 About Chacha')
                        .setStyle(ButtonStyle.Secondary)
                );

            await message.reply({
                content: '🤖 CHACHA HELP MENU\n\nChoose an option below:',
                components: [row]
            });
        }

        // RANK COMMAND
       if (message.content === '!rank') {

    const users = Object.entries(data);

    users.sort((a, b) => {
        return b[1].xp - a[1].xp;
    });

    const rank = users.findIndex(
        user => user[0] === userId
    ) + 1;

    return message.reply(
        `🏆 Rank: #${rank}\n⭐ XP: ${data[userId].xp}`
    );
}
            
        }
    };
