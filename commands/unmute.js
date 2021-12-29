const Discord = require("discord.js")
const Embed = new Discord.MessageEmbed()
const MuteName = "Muted"

module.exports = {
    name: "언뮤트",
    cooldown : 1,
    execute(message){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("권한이 없습니다 (필요 권한 : 메세지 관리 )")
        let User = message.mentions.members.first()
        if(!User) return message.channel.send("지정된 대상이 없습니다.: -언뮤트 <맨션>")
        
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))

        let role = message.guild.roles.cache.find((role) => role.name === MuteName)
        let muteembed = new Discord.MessageEmbed().setColor(0xFF90FF).setAuthor(`${member.user.tag} 유저의 침묵을 해제했습니다.`).setDescription(`처리자: <@${message.author.id}>`).setTimestamp()

        if (!role) return error.send(message, "`Muted` 역할이 서버에 존재하지 않습니다.")

        let hasrole = member.roles.cache.find((r) => r.name === MuteName)
        if (hasrole) {
            member.roles
                .remove(role.id)
                .then(() => {
                    message.channel.send({ embed: muteembed })
                })
            }
    }
}
