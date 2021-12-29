const Discord = require('discord.js')

module.exports ={
    name:"시간",
    cooldown : 2,
    execute(message){

        const Embed = new Discord.MessageEmbed
        message.channel.send(Embed.setTitle(`현재 시간`).setTimestamp(new Date()).setColor(0x00FFFF))
    }
}
