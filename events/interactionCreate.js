if (interaction.customId === 'commands') {
    return interaction.reply({
        content:
`📚 COMMANDS

/help
/ping
!push
!rank`,
        ephemeral: true
    });
}

if (interaction.customId === 'moderation') {
    return interaction.reply({
        content:
`🛡️ MODERATION

✅ Anti-Spam
✅ Auto Timeout
✅ Upload Protection
✅ Role Management`,
        ephemeral: true
    });
}

if (interaction.customId === 'links') {
    return interaction.reply({
        content:
`🔗 LINK SYSTEM

!push <link>

• Approval Queue
• Co-owner Approval
• Channel Selection`,
        ephemeral: true
    });
}

if (interaction.customId === 'serverinfo') {
    return interaction.reply({
        content:
`ℹ️ SERVER INFO

Server: ${interaction.guild.name}
Members: ${interaction.guild.memberCount}`,
        ephemeral: true
    });
}

if (interaction.customId === 'memberinfo') {
    const member = interaction.member;

    return interaction.reply({
        content:
`👤 MEMBER INFO

User: ${member.user.username}
Joined: ${member.joinedAt.toDateString()}
Roles: ${member.roles.cache.size - 1}`,
        ephemeral: true
    });
}