module.exports = {
    name: "무작위",
    cooldown : 2,
    execute(message, args) {
        if(!args[0]) return message.reply(`항목을 입력해줘!`)
        if(!args[1]) return message.reply(`항목을 두 개 이상 입력해줘!`)
        if(args[4]) return message.reply(`항목은 최대 네 개까지 입력 가능해!`)
        const i = args.length
        let random = parseInt(Math.random() * i);
        message.reply(`나의 선택은 **${args[random]}** 야!`);
    }
}
