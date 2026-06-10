module.exports = {
    name: 'messageCreate',

    async execute(message) {

        if (message.author.bot) return;

        if (!message.content.startsWith('!info')) return;

        const member =
            message.mentions.members.first() ||
            message.member;

        const roles = member.roles.cache
            .filter(role => role.name !== '@everyone')
            .map(role => role.name)
            .join(', ');

        message.reply(
`👤 USER INFO

Name: ${member.user.username}
ID: ${member.user.id}

🎭 Roles:
${roles || 'No Roles'}

📅 Joined:
${member.joinedAt.toDateString()}`
        );
    }
};