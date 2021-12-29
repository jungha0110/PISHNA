const Discord = require('discord.js')

module.exports = {
    name: "서버정보",
    cooldown : 3,
    execute(message){
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField("서버 이름",`${message.guild.name}`)
        .addField("인원수",`${message.guild.memberCount}명`)
        .addField("서버주인",`<@${message.guild.ownerID}>`)
        .addField("서버 생성일",`${message.guild.createdAt}`)
        .addField(" 텍스트 채널",`${message.guild.channels.cache.filter(x => x.type === "text").size}개`)
        .addField("음성 채널",`${message.guild.channels.cache.filter(x => x.type === "voice").size}개`)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        message.reply(embed)
    }
}
