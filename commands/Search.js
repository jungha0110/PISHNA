module.exports = {
    name:"검색",
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
        .setDescription(`[구글](https://www.google.co.kr/search?q=${content})\n[나무위키](https://namu.wiki/Search?q=${content})\n[네이버](https://search.naver.com/search.naver?ie=UTF-8&query=${content})\n[다음](https://search.daum.net/search?w=tot&q=${content})\n[유튜브](https://www.youtube.com/results?search_query=${content})`)
        message.channel.send(Embed)
    }
}
