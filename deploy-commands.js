require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'help',
        description: 'Show Chacha commands'
    },
     {
        name: 'rank',
        description: 'Show your rank and XP'
    },
    {
    name: 'top',
    description: 'Show top 10 XP leaderboard'
},
    {
    name: 'info',
    description: 'Show member information',
    options: [
        {
            name: 'user',
            description: 'Select a member',
            type: 6, // USER
            required: false
        }
    ]
}
];

const rest = new REST({ version: '10' })
    .setToken(process.env.TOKEN);

(async () => {
    await rest.put(
       Routes.applicationGuildCommands(
    process.env.CLIENT_ID,
    '1087992056120627202'
),
        { body: commands }
    );

    console.log('Commands registered!');
})();