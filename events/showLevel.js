const fs = require('fs');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'messageCreate',

    async execute(message) {

        if (message.author.bot) return;

        if (message.content !== '!top') return;

        const data = JSON.parse(
            fs.readFileSync('./events/data/user.json', 'utf8')
        );

        const users = Object.entries(data);

        users.sort((a, b) => b[1].xp - a[1].xp);

        let leaderboard = '';

        for (let i = 0; i < Math.min(users.length, 10); i++) {

            const user =
                await message.client.users.fetch(users[i][0]);

            const medal =
                i === 0 ? '🥇' :
                i === 1 ? '🥈' :
                i === 2 ? '🥉' : '🏅';

            leaderboard +=
                `${medal} **${user.username}** — ${users[i][1].xp} XP\n`;
        }

        const embed = new EmbedBuilder()
            .setTitle('🏆 CHACHA LEADERBOARD')
            .setDescription(leaderboard)
            .setColor('#FFD700')
            .setImage('https://media.tenor.com/tEBoZu1ISJ8AAAAC/fireworks-celebration.gif')
            .setFooter({
                text: 'Top 10 XP Leaders'
            });

        return message.reply({
            embeds: [embed]
        });
    }
};