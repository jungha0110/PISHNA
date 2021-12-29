module.exports = {
    name: "타이머",
    cooldown : 5,
    execute(message,args){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        if(isNaN(args[0])) {
            return message.reply(Embed.setColor("#D8BEE4").addField("오류!",`숫자를 입력해주세요!`))
        } if (!args[1] || args[1] == "초") {
            if (args[0] > 43200){
                return message.reply(Embed.setColor("#D8BEE4").addField("오류!",`최대 43200초입니다!`))
            } else {
                message.reply(Embed.setColor("#D8BEE4").addField("타이머 시작!",`${args[0]}초 후에 멘션해드릴게요!`))
                setTimeout(function(){
                    message.channel.send(`<@${message.author.id}> ${args[0]}초 타이머가 종료되었어요!`)
                    message.channel.send(`<@${message.author.id}> ${args[0]}초 타이머가 종료되었어요!`)
                }, (args[0] * 1000))
            }
        } if (args[1] == "분") {
            if (args[0] > 720){
                return message.reply(Embed.setColor("#D8BEE4").addField("오류!",`최대 720분입니다!`))
            } else {
                message.reply(Embed.setColor("#D8BEE4").addField("타이머 시작!",`${args[0]}분 후에 멘션해드릴게요!`))
                setTimeout(function(){
                    message.channel.send(`<@${message.author.id}> ${args[0]}분 타이머가 종료되었어요!`)
                    message.channel.send(`<@${message.author.id}> ${args[0]}분 타이머가 종료되었어요!`)
                }, (args[0] * 60000))
            }
        } if (args[1] == "시간") {
            if (args[0] > 12){
                return message.reply(Embed.setColor("#D8BEE4").addField("오류!",`최대 12시간입니다!`))
            } else {
                message.reply(Embed.setColor("#D8BEE4").addField("타이머 시작!",`${args[0]}시간 후에 멘션해드릴게요!`))
                setTimeout(function(){
                    message.channel.send(`<@${message.author.id}> ${args[0]}시간 타이머가 종료되었어요!`)
                    message.channel.send(`<@${message.author.id}> ${args[0]}시간 타이머가 종료되었어요!`)
                }, (args[0] * 3600000))
            }
        }
    }
}
