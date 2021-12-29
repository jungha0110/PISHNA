const Discord = require('discord.js')

module.exports = {
    name : "봇정보",
    cooldown : 1,
    execute(message){

        const embed = new Discord.MessageEmbed()

        .setAuthor("피슈나!", "https://cdn.discordapp.com/avatars/846362257617190952/3c57016712980557960050532662a9c1.png?size=128")
        .setTitle("피슈나 봇 프로필!")
        .setURL("https://cdn.discordapp.com/avatars/846362257617190952/3c57016712980557960050532662a9c1.png?size=128")
        .setColor(0x0100FF)
        .setDescription("피슈나 봇 정보입니다!")
        .setThumbnail("https://cdn.discordapp.com/avatars/846362257617190952/3c57016712980557960050532662a9c1.png?size=128")
        .addField("제작자", "마인슈라#5966", true)
        .addField("성별","여자", true)
        .addField("나이", "14살", true)
        .addField("사는곳", "서버용 PC", true)
        .addField("좋아하는 것", "남자", true)
        .addField("싫어하는 것", "쌀덤", true)
        .addField("고향", "마인슈라 컴퓨터", true)
        .addField("좋아하는 유튜브", "마인슈라", true)
        .addField("🔗**외부 링크**🔗","[트위치](https://www.twitch.tv/minesura)   ||    [유튜브](https://www.youtube.com/c/마인슈라)")
        
        message.channel.send(embed)
    }
}
