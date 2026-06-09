



module.exports = {
    name: 'messageCreate',

    execute(message) {

        if (message.author.bot) return;

        if (message.content.startsWith('!role')) {

            const member = message.mentions.members.first();

            if (!member) {
                return message.reply('Usage: !role @user');
            }

            const roles = member.roles.cache
                .filter(role => role.name !== '@everyone')
                .map(role => role.name)
                .join(', ');

            message.reply(`${member.user.username} -> ${roles}`);
        }
    }
};