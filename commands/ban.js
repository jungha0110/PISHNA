const Discord = require('discord.js');

module.exports = {
    name: "밴",
    cooldown : 1,
    execute(message){
        
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("권한이 없습니다 (필요 권한 : 밴 )")

        const embed = new Discord.MessageEmbed()
        let User = message.mentions.members.first()

        if(!User) return message.reply(embed.setTitle("사용자를 찾을 수 없습니다! : -밴 <맨션>"))
        if(User.hasPermission("BAN_MEMBERS")) return message.reply(embed.setTitle("본 사용자는 추방 할 수 없습니다! : -밴 <맨션>"))
        User.ban(); 
        message.reply(embed.setTitle(`성공적으로 ${message.mentions.members.first()}유저를 영구추방했습니다!`).setDescription(`처리자: <@${message.author.id}>`))
    }
}
