const spamMap = new Map();
const warnings = {};

module.exports = {
    name: 'messageCreate',

    async execute(message) {

        if (message.author.bot) return;

        const userId = message.author.id;

        if (!spamMap.has(userId)) {
            spamMap.set(userId, []);
        }

        const msgs = spamMap.get(userId);

        msgs.push(Date.now());

        const recent = msgs.filter(
            t => Date.now() - t < 10000
        );

        spamMap.set(userId, recent);
console.log("RECENT MSG COUNT =", recent.length);
        if (recent.length >= 5) {

            // Reset warning after 24 hours
            if (
                warnings[userId] &&
                Date.now() - warnings[userId] > 86400000
            ) {
                delete warnings[userId];
            }

            // First offense
            if (!warnings[userId]) {

                warnings[userId] = Date.now();
                spamMap.set(userId, []);

                await message.channel.send(
                    `🚨 CHACHA SECURITY ALERT 🚨\n\n${message.author}\nSlow down.\nNext spam offense today = 5 minute timeout.`
                );
await message.channel.send(
    'https://media.tenor.com/4eUxz7hogG0AAAA1/kunleinho-kunleinho-gifs.webp'
);

// SOUND HERE



return;

                
            }

            // Second offense
            try {

                await message.member.timeout(
                    5 * 60 * 1000,
                    'Repeated spam'
                );

                await message.channel.send(
                    `⛔ ${message.author} has been timed out for 5 minutes.`
                );

            } catch (err) {
                console.log(err);
            }
        }
    }
};