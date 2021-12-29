const Discord = require('discord.js');
const client = new Discord.Client();
const { color, errorcolor, img1, img2, img3, img4, hpapikey } = require("../config.json");
const fs = require('fs');
const fetch = require('node-fetch');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(hpapikey);
const commaNumber = require('comma-number');
client.aliases = new Discord.Collection()

module.exports = {
    name: "유챔",
    execute(message, args) {
        if (args[0] == null) {
            const Embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, img3)
                .setThumbnail(img3)
                .setTitle(`유저를 찾을 수 없습니다`)
                .setImage(img4)
                .setFooter(``, img3)
                .setTimestamp()
                .setColor(`${errorcolor}`)

            message.channel.send(Embed)
                .then(msg => { setTimeout(() => msg.delete(), 3000) })
        }

        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const Embed = new Discord.MessageEmbed()
                .setAuthor(`HYPIXEL UHC`, img3)
                .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/UHC-64.png')
                .setTitle('UHC Stats')
                .addField('Kills:', `${commaNumber(player.stats.uhc.kills)}`, true)
                .addField('Level:', `${player.stats.uhc.starLevel}`, true)
                .addField('Wins:', `${commaNumber(player.stats.uhc.wins)}`, true)
                .addField('Heads Eaten:', `${commaNumber(player.stats.uhc.headsEaten)}`, true)
                .addField('Deaths', `${commaNumber(player.stats.uhc.deaths)}`, true)
                .addField('Coins:', `${commaNumber(player.stats.uhc.coins)}`, true)
                .setImage(img4)
                .setFooter(``, img3)
                .setTimestamp()
                .setColor(`${color}`)

            message.channel.send(Embed)
        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                const Embed = new Discord.MessageEmbed()
                    .setAuthor(`ERROR`, img3)
                    .setThumbnail(img3)
                    .setTitle(`유저를 찾을 수 없습니다`)
                    .setImage(img4)
                    .setFooter(``, img3)
                    .setTimestamp()
                    .setColor(`${errorcolor}`)

                message.channel.send(Embed)
                    .then(msg => { setTimeout(() => msg.delete(), 3000) })
            }
        });
    }
}