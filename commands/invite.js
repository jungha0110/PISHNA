const Discord = require('discord.js')
const disbut = require('discord-buttons');

module.exports = {
    name: "초대",
    cooldown:4,
    execute(message){

        const embed = new Discord.MessageEmbed()
        .setTitle('봇 초대!')
        .setColor("RANDOM")

        const button2 = new disbut.MessageButton()
        .setStyle('url')
        .setURL('http://asq.kr/PISHNA') 
        .setLabel('봇 초대 버튼'); 
    
        message.channel.send(embed,button2)
    }
}
