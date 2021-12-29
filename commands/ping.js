const Discord = require('discord.js');

module.exports = {
    name: "핑",
    cooldown : 1,
    execute(message){
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms 입니다!`);
        message.channel.send(ping);
    }
}
