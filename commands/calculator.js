const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "계산",


    execute(message, args) {

        if (!args[0]) return message.reply('올바르지 않은 값이에요!');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.reply('올바르지 않은 값이에요!')
        }

        const embed = new Discord.MessageEmbed()
            .setColor("#00FFFF")
            .setTitle('계산기')
            .addField('질문', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('정답', `\`\`\`css\n${resp}\`\`\``)

        message.reply(embed);

    }
} 