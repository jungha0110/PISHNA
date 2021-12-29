const Discord = require('discord.js');
const client = new Discord.Client();
const { color, img1, covidapi } = require("../config.json");
const fetch = require('node-fetch');

module.exports = {
    name: '코로나',
    execute(message) {
        fetch(`https://api.corona-19.kr/korea/?serviceKey=${covidapi}`)
            .then((res) => res.json())
            .then((json) => {
                let Embed = new Discord.MessageEmbed()
                    .setAuthor(`COVID-19 STATS`)
                    .setTitle("KOREA COVID-19 STATS")
                    .setDescription(json["updateTime"])
                    .addFields(
                        { name: '국내 완치율', value: `${json["recoveredPercentage"]}%`, inline: true },
                        { name: '국내 사망률', value: `${json["deathPercentage"]}%`, inline: true },
                        { name: '국내 검사률', value: `${json["checkingPercentage"]}%`, inline: true },

                        { name: '국내 누적 확진자수', value: `${json["TotalCase"]}명`, inline: true },
                        { name: '국내 누적 완치자수', value: `${json["TotalRecovered"]}명`, inline: true },
                        { name: '국내 누적 사망자수', value: `${json["TotalDeath"]}명`, inline: true },
                    )
                    .setFooter(``, img1)
                    .setTimestamp()
                    .setColor(`${color}`)


                message.channel.send(Embed)
            })
    }
}