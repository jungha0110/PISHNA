module.exports = {
    name:"사전",
    execute(message, args) {
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        var content = ""
        var a = 0
        while (a < args.length) {
            content += args[a]
            if (a < args.length - 1) content += "+"
            a++
        }
        if (content == "") return message.channel.send("검색하실 내용을 입력해주세요!")
        Embed.setAuthor("검색 결과").setColor("#d8bee4")
        .setDescription(`[네이버 사전](https://dict.naver.com/search.dict?query=${content})\n[다음 사전](https://dic.daum.net/search.do?q=${content})`)
        message.channel.send(Embed)
    }
}
