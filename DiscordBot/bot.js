const { Client, Intents, Message } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("message", (msg) => {
    if(msg.content == "spam") {
        setInterval(() => {
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
            msg.channel.send("spam");
        }, 100);
    }
})

client.login("NzQwODk3NzMxMzIwNDc5ODA1.GZgdxq.3YbBdeipKkPBS9kvHIiLBfOrTGxDHvbrxY9KGM");