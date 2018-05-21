const Discord = require("discord.js");
const Bot = new Discord.Client();
const ms = require("ms");
const fs = require("fs");

const token = "NDQ3ODE4MDgyNTIyNzU5MTgw.DeNGpQ.PB9nJw_bmpEidoXjwjXktunrEOY";

Bot.login(token);

Bot.on("ready", () => {
    console.log("P00B");
});

var prefix = "?"

Bot.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");

    const rl = readline.createInterface({
        input: fs.createReadStream('badwords.txt')
      });
      
    rl.on('line', (line) => {
        if (message.content.includes(line)) {
            message.author.kick();
        }
    });

    if (message.content === "?P00B") {
        message.channel.send("P00B IS LOVE P00B IS LIFE");
    } else if (message.content === "?P00B.2") {
        message.channel.send("I Am Your Dad");
    } else if (message.content.startsWith("?mute")) {
        if (message.mentions.users.size === 0) {
            return message.reply("U DUM DUM UGG").catch(console.error);
        }
        if (message.mentions.users.size > 1) {
            return message.reply("U DUM DUM 1 AT TIME, STUPEDED")
        }
        if (!args[2]) {
            return message.reply("SEZ TIME IDIT")
        }
        var mutemember = message.guild.member(message.mentions.users.first());
        const muterole = message.guild.roles.find("name", "Muted");
        mutemember.addRole(muterole.id);
        message.reply("HAHAHAHAH GET SILENCED KIDDO");
        setTimeout(function() {
            mutemember.removeRole(muterole.id);
            message.channel.send("OH NO HE BACK WUT U DO?!");
        }, ms(args[2] + "s"));
        return;
    } else if (message.content.startsWith("?kick")) {
        if (message.mentions.users.size === 0) {
            return message.reply("THEY NO GO BYE BYE FIX!").catch(console.error);    
        }
        if (message.mentions.users.size > 1) {
            return message.reply("U NO GOD ONLY 1")    
        }
        const kick = message.guild.member(message.mentions.users.first());
        kick.kick().then(function(member) {
            message.reply("YAY THE BAD WHOMSTVED IS BANISHED KINDA");
        })
    } else if (message.content.startsWith("?ban")) {
        if (message.mentions.users.size === 0) {
            return message.reply("R U CHROMOSOME LACKING!").catch(console.error);    
        }
        if (message.mentions.users.size > 1) {
            return message.reply("U R GOD BUT STILL ONLY ONE")    
        }
        const kick = message.guild.member(message.mentions.users.first());
        kick.ban().then(function(member) {
            message.reply("BEGONE THOT!!!");
        })
    }
});
