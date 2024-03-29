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
    name: "스워",
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
                .setAuthor(`HYPIXEL SKYWARS`, img3)
                .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png')
                .setTitle('Skywars Stats')
                .addField('Level:', `${player.stats.skywars.level}`, true)
                .addField('Level Progress:', `${player.stats.skywars.levelProgress.currentLevelXp} / ${player.stats.skywars.levelProgress.xpToNextLevel} [${player.stats.skywars.levelProgress.percent}%]`, true)
                .addField('Heads:', `${commaNumber(player.stats.skywars.heads)}`, true)
                .addField('KD Ratio:', `${player.stats.skywars.KDRatio}`, true)
                .addField('WL Ratio:', `${player.stats.skywars.WLRatio}`, true)
                .addField('Coins:', `${commaNumber(player.stats.skywars.coins)}`, true)
                .addField('Total Deaths:', `${commaNumber(player.stats.skywars.deaths)}`, true)
                .addField('Total Kills:', `${commaNumber(player.stats.skywars.kills)}`, true)
                .addField('Winstreak:', `${commaNumber(player.stats.skywars.winstreak)}`, true)
                .addField('Total Wins:', `${commaNumber(player.stats.skywars.wins)}`, true)
                .addField('Tokens:', `${commaNumber(player.stats.skywars.tokens)}`, true)
                .addField('Prestige:', `${player.stats.skywars.prestige}`, true)
                .addField('Souls:', `${commaNumber(player.stats.skywars.souls)}`, true)
                .addField('Ranked Kills:', `${commaNumber(player.stats.skywars.ranked.kills)}`, true)
                .addField('Ranked Losses:', `${commaNumber(player.stats.skywars.ranked.losses)}`, true)
                .addField('Ranked Games Played:', `${commaNumber(player.stats.skywars.ranked.played)}`, true)
                .addField('Ranked Wins:', `${commaNumber(player.stats.skywars.ranked.wins)}`, true)
                .addField('Ranked KD Ratio:', `${player.stats.skywars.ranked.KDRatio}`, true)
                .addField('Ranked WL Ratio:', `${player.stats.skywars.ranked.WLRatio}`, true)
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