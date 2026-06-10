require('dotenv').config();
const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' })
.setToken(process.env.TOKEN);

(async () => {
    await rest.put(
        Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            '1087992056120627202'
        ),
        { body: [] }
    );

    console.log('All guild commands deleted!');
})();