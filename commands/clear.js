const Discord = require('discord.js');

module.exports = {
    name: "청소",
    cooldown : 1,
    execute(message,args){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("권한이 없습니다 (필요 권한 : 메세지 관리 )")

        const embed = new Discord.MessageEmbed()
        if(isNaN(args[0])) return message.reply(embed.setTitle("올바른 값을 입력해주세요."))
        const MessageCount = parseInt(args[0])
        if(MessageCount < 0 || MessageCount > 99) return message.reply(embed.setTitle("1 에서 100 미만의 수를 입력해주세요."))
        message.channel.bulkDelete(MessageCount + 1).then((count)=>{
            message.reply(embed.setTitle(`${message.author.tag}성공적으로 ${count.size} 개의 메시지를 삭제하였습니다.`))
            
        }).catch((error)=>{
            message.reply(embed.setTitle(`오류가 발생하였습니다. \n오류 내용 : ${error}`))
        })
    }
}
