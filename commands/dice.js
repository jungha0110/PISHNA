const Discord = require('discord.js')

module.exports = {
    name: "주사위",
    cooldown : 3,
    execute(message){

        const playerDice1 = Math.floor(Math.random() * 6 + 1); //플레이어가 굴려서 나온 주사위 1
        const playerDice2 = Math.floor(Math.random() * 6 + 1); //플레이어가 굴려서 나온 주사위 2
        const botDice1 = Math.floor(Math.random() * 6 + 1); //봇이 굴려서 나온 주사위 1
        const botDice2 = Math.floor(Math.random() * 6 + 1); //봇이 굴려서 나온 주사위 2
        const embed = new Discord.MessageEmbed()
        
        message.reply(embed.setTitle(`너는 주사위를 굴려 **${Math.floor(playerDice1)}** 와 **${Math.floor(playerDice2)}** 가 나왔어!`)); //플레이어의 주사위 결과 출력
        setTimeout(()=>{message.reply(embed.setTitle(`너의 상대는 주사위를 굴려 **${Math.floor(botDice1)}** 와 **${Math.floor(botDice2)}** 가 나왔어!`));},2000) //봇의 주사위 결과 출력
        setTimeout(()=>{if(Math.floor(playerDice1 + playerDice2) > Math.floor(botDice1 + botDice2)){
            message.reply(embed.setTitle(`축하해! **너가 이겼어!**`));
        };
        if(Math.floor(playerDice1 + playerDice2) == Math.floor(botDice1 + botDice2)){
            message.reply(embed.setTitle(`이런! **비겼어!**`));
        };
        if(Math.floor(playerDice1 + playerDice2) < Math.floor(botDice1 + botDice2)){
            message.reply(embed.setTitle(`저런! **너가 졌어!**`));
        };
        },4000) //주사위 게임의 결과 출력
    }
}
