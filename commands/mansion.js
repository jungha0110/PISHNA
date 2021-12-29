const Discord = require("discord.js")

module.exports = {
    name: "전달",
    cooldown : 1,
    execute(message,args){
        const Embed = new Discord.MessageEmbed()
        let dw = message.mentions.members.first();
        if (!dw) return message.channel.send("사용자를 맨션해주세요!");
        let wa = args.slice(1).join(" ");
        if (!wa) wa = "그냥"
        Embed.setTitle("전달!")
        Embed.setDescription(`${message.author.tag} 님이 ${message.mentions.members.first()}님에게 전달했습니다`)
        Embed.addField(`전달 메세지 : \n${wa}`,'전달되었습니다!')
        Embed.setColor("RANDOM")
        message.channel.send(`${message.mentions.members.first()}`,Embed)
    }
}