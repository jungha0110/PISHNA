const { MessageEmbed} = require("discord.js")

module.exports = {
    name: "공지",

    execute(message, args) {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.id === args[0])
        if(!channel) {
            let embed = new MessageEmbed()
            .setTitle("ERROR") //KK12 : 채널
            .setDescription(`채널이 선택 되지 않았습니다, 채널을 선택해주세요.`)
            .setColor('RED')
            message.channel.send(embed)
            return;
        }
        const announcement = args.slice(1).join(" ")
        if(!announcement) {
            let embed = new MessageEmbed()
            .setTitle("ERROR") //FMN1 : 문자
            .setDescription(`공지에 입력할 문자가 비었습니다, 문자를 입력해주세요.`)
            .setColor('RED')
            message.channel.send(embed)
            return;
        }
        let embed = new MessageEmbed()
        .setColor('GREEN')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .addField(`**공지사항**`,`${announcement}`)
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('당신은 이 명령어를 실행 할 권한이 없습니다.')
        channel.send("@everyone")
        channel.send(embed)
    }
}
