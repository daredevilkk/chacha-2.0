const fs = require('fs');

module.exports = {
    name: 'messageCreate',

    async execute(message) {

        if (message.content !== '!top') return;

        const data = JSON.parse(
            fs.readFileSync('./events/data/user.json', 'utf8')
        );

        const users = Object.entries(data);

        users.sort((a, b) => {
            return b[1].xp - a[1].xp;
        });

        let leaderboard = '🏆 LEADERBOARD 🏆\n\n';

        for (let i = 0; i < Math.min(users.length, 10); i++) {

            const user =
                await message.client.users.fetch(users[i][0]);

            leaderboard +=
                `${i + 1}. ${user.username} - ${users[i][1].xp} XP\n`;
        }

        message.reply(leaderboard);
    }
};