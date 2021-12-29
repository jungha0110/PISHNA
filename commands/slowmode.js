const Discord = require('discord.js')

module.exports = {
    name:"슬로우모드",
    cooldown : 2,
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("권한이 없습니다 (필요 권한 : 채널 관리 )")
        if(isNaN(args[0])) return message.reply("올바른 값을 입력해주세요. : -슬로우모드 <숫자>");
        const time = parseInt(args[0]);
        message.channel.setRateLimitPerUser(time)
        const embed = new Discord.MessageEmbed()
        .setTitle("슬로우모드")
        .addField("슬로우 모드가 활성화되었습니다",`[슬로우 시간 : ${time}초]`)
        message.reply(embed)

    }
}
