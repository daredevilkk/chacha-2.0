module.exports = {
    name: 'guildMemberAdd',

    execute(member) {

        const channel = member.guild.systemChannel;

        if (!channel) return;

        channel.send(`Hello ${member}! Welcome to the server 🎉`);
    }
};