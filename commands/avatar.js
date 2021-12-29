const Discord = require('discord.js')

module.exports = {
    name:"프사",
    cooldown : 1,
    execute(message){

        if(!message.mentions.members.first()) return message.reply("유저 프사를 볼 유저를 멘션해주세요.")

        const user = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()

        embed.setTitle(`${user.user.tag} 님의 프사!`)
        embed.setImage(user.user.avatarURL())
        
        return message.reply(embed)
    }
}
