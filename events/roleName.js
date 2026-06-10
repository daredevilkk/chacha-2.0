const fs = require('fs');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'messageCreate',

    async execute(message) {
console.log("MESSAGE RECEIVED:", message.content);
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
        }if (!message.content.startsWith('!')) {
    data[userId].xp += 5;
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

    const embed = new EmbedBuilder()
        .setTitle('🌸 CHACHA CONTROL CENTER')
        .setDescription(
`Welcome to Chacha!

Choose a category below to view commands and information.

🤖 XP System Active
🛡️ Anti-Spam Active
🔗 Link Approval Active
⚡ Slash Commands Active`
        )
        .setColor('#3498db')
        .setImage('https://i.pinimg.com/1200x/29/dd/a8/29dda851640537764f78bbdb53e22b85.jpg')
        .setFooter({
            text: 'Chacha Bot • Your Server Assistant'
        });

    const row1 = new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
                .setCustomId('commands')
                .setLabel('📚 Commands')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('moderation')
                .setLabel('🛡️ Moderation')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('links')
                .setLabel('🔗 Link System')
                .setStyle(ButtonStyle.Primary)
        );

    const row2 = new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
                .setCustomId('serverinfo')
                .setLabel('ℹ️ Server Info')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId('memberinfo')
                .setLabel('👤 Member Info')
                .setStyle(ButtonStyle.Primary)
        );

    await message.reply({
        embeds: [embed],
        components: [row1, row2]
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

   const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
    .setTitle('🏆 CHACHA RANK')
    .setColor('#3498db')
    .setThumbnail(message.author.displayAvatarURL())
    .addFields(
        {
            name: '👤 User',
            value: message.author.username,
            inline: true
        },
        {
            name: '🥇 Rank',
            value: `#${rank}`,
            inline: true
        },
        {
            name: '⭐ XP',
            value: `${data[userId].xp}`,
            inline: true
        }
    )
    .setImage('https://media.tenor.com/0AVbKGY_MxMAAAAC/congratulations-fireworks.gif')
    .setFooter({
        text: 'Keep chatting to earn XP! 🚀'
    });

return message.reply({
    embeds: [embed]
});
}
            
        }
    };
