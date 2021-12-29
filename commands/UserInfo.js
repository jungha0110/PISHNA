const Discord = require('discord.js')
module.exports = {
    name:"유저정보",
    cooldown : 1,
    execute(message){
        if(!message.mentions.members.first()) return message.reply("유저 정보를 볼 유저를 멘션해주세요.")
        const user = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
        const createdAt = user.user.createdAt
        embed.setTitle(`${user.user.tag} 님의 정보`)
        embed.setThumbnail(user.user.avatarURL())
        if(!user.user.avatarURL()) embed.setThumbnail(user.user.defaultAvatarURL)
        embed.addField("아이디",user.user.id)
        embed.addField("가입날짜", `${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 ${createdAt.getDay()}일 ${createdAt.getHours()}시 ${createdAt.getMinutes()}분`)
        return message.reply(embed)
    }
}
