const Discord = require('discord.js')
const laftel = require('laftel.js')
const embed = new Discord.MessageEmbed()
const embed1 = new Discord.MessageEmbed()
const embed2 = new Discord.MessageEmbed()

module.exports = {
    name : "애니",
    execute(message, args){
        if(args[0] == null){
            embed1
            .setTitle('ERROR')
            .setDescription("애니 제목을 적어주세요!")
            .setColor("RED")
            message.channel.send(embed1)
        }
        if(args[0]){
            laftel.search(`${args[0]}`).then(result => {
                const [anime] = result.results
                laftel.getItem(anime.id).then(result => {
                    embed
                    .setTitle(`${result.name}`)
                    .setURL(`https://laftel.net/item/${result.id}`)
                    .setDescription(`${result.content}`)
                    .addField(`종류`,`${result.type}`,true)
                    .addField('다른 작품',`[더보기](https://laftel.net/search?keyword=${args[0]})`,true)
                    .setImage(`${result.img}`)
                    .setColor("RANDOM")
                    message.channel.send(embed)
                })
            }).catch((error) =>{
                embed2
                    .setTitle("ERROR")
                    .setDescription("애니를 찾을 수 없어요")
                    .setColor("RED")
                message.reply(embed2)
            })
        }
    }
}