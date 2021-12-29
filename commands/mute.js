module.exports = {
    name: "뮤트",
    cooldown : 1,
    async execute(message, args) {
        const Discord = require("discord.js")
        const Embed = new Discord.MessageEmbed()

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("권한이 없습니다 (필요 권한 : 메세지 관리 )")
        let mutee = message.mentions.members.first();
        if (!mutee) return message.channel.send("뮤트할 사용자를 입력해주세요. : -뮤트 <맨션> <사유>");
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "사유 없음"
        let muterole = message.channel.guild.roles.cache.find(r => r.name == "Muted")
        if (!muterole) {
            try {
                muterole = await message.guild.roles.create({
                    data: {
                        name: "Muted",
                        color: '#A4A4A4',
                    },
                    reason: reason,
                }) 
                muterole.setPermissions(new Discord.BitField(0));
                message.guild.channels.cache.forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SEND_TTS_MESSAGES: false,
                        ATTACH_FILES: false,
                        SPEAK: false
                    })
                })
            } catch (e) {
                console.log(e.stack)
            }
        } mutee.roles.add(muterole.id).then(() => {
            message.channel.send(Embed.setColor(0xFF90FF).setTitle(`**${mutee.user.username}** 유저를 뮤트하였습니다.`).setDescription(`처리자: <@${message.author.id}>\n사유: ${reason}`).setTimestamp())
        })
    }
}
