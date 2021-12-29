// Modules
const Discord = require('discord.js');//Discord.js 모듈을 불러오는거 Python따지면 improt
const fs = require('fs'); // fs라는 모듈을 불러오는거 Python따지면 improt

// Token , Prefix 나 등등
const client = new Discord.Client(); // Client new Discord.Client를 만든다
require('discord-buttons')(client);
const { prefix , token } = require('./config.json');//config.json에 prefix , token을 불러옴

//Discord Collection
const cooldowns = new Discord.Collection() //Cooldowns 하는 디스코드 콜렉션을 만듬
client.commands = new Discord.Collection() //commands 라는 디스코드 콜렉션을 만듬

//PingPong Builder
require('./utils/loader')(client)

//CommandFiles 불러오기
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Ready
client.on('ready', () => { //봇이 시작이 되면
    client.user.setActivity(`-도움말 , 슈나야 <말하고 싶은거>`,{type: 'PLAYING'}) // 상태설정 과 오프라인 , 온라인 , 방송중 , ~보는중 , 다른용무중
    console.log(`${client.user.username} 준비완료`) // 준비가 되면 콘솔에 준비완료를 뛰운다
});

//봇이 명령어를 쳤을때 , 쿨타임
client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name,new Discord.Collection())
    }
    const now = Date.now()
    const timestamps = cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 3)*1000
    if(timestamps.has(msg.author.id)){
        const expirationTime = timestamps.get(msg.author.id) + cooldownAmount
        if(now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000
            return msg.reply(`${command.name} 해당 명령을 쓰기 위해서는 ${timeLeft.toFixed(1)}초을 더 기다려야 합니다!`)
        }
    }
    timestamps.set(msg.author.id,now)
    setTimeout(()=> timestamps.delete(msg.author.id),cooldownAmount)
    try{
        command.execute(msg, args)
    }catch(error) {
        console.log(error)
    }
})

//토큰
client.login(token)

//전송 커맨드
client.on('message', message => {
    if(message.content.startsWith(`${prefix}전송`)) {
      const user = message.mentions.users.first() 
      if(!message.member.hasPermission('ADMINISTRATOR')) return messaage.reply("관리자 권한이 필요합니다!")
      try{ 
        let content = message.content.slice(`${prefix}전송` .length);
        const embed = new Discord.MessageEmbed()
        .setTitle("📌 | 디엠도착")
        .setDescription(content)
        .addField(`${user.username}님에게 개인메시지가 도착했습니다!`, `전송자 ${message.author.username}`)
        .setFooter(user.tag)
        .setTimestamp()
        .setColor('RANDOM')
        user.send(embed)
        message.channel.send("메시지를 전송했습니다.")
      }catch(err) { 
        console.log(err)
        message.reply("오류 발생! : -전송 <맨션> <보낼말>")
      }
    }
});

//문의사항 커맨드
client.on('message', message=> {
    const Embed = new Discord.MessageEmbed().setColor('#FFFFF0');
    if(message.channel.type === 'dm' && message.content.startsWith(`${prefix}문의`)){
        const content = message.content.slice(prefix.length + 2).trim()
        message.channel.send(`문의가 성공적으로 전송되었습니다.`);
        client.channels.cache.get('문의 받을 채널ID').send(Embed.setTitle(`${message.author.username} (id:${message.author.id}) 님의 문의`).setDescription(content))
    }
})

// eval

client.on('message',message=>{
    if(message.content == `${prefix}eval 서버리스트`){
        if (message.author.id !== "오너ID") return message.reply("봇 제작자만 가능합니다")
        guilds = "";
        client.guilds.cache.forEach(g => guilds += g.name + "\n");
        
        message.channel.send(guilds)
    }
})

client.on('message',message=>{
    if(message.content.startsWith(`${prefix}eval 서버나가기`)){
        if (message.author.id !== "오너ID") return message.reply("봇 제작자만 가능합니다")
        const args = message.content.slice('서버나가기 '.length);
        const server1 = client.guilds.cache.find(c => c.name === args);
        if(!server1) return message.reply("서버가 존재하지않음")
        server1.leave()
        message.channel.send(`${args}서버에서 나갔습니다`)
    }
})

client.on('message', message=> {
    if(message.content.startsWith(`${prefix}eval 서버수`)){
        if (message.author.id !== "오너ID") return message.reply("봇 제작자만 가능합니다")
        message.reply(`봇이 ${client.guilds.cache.size}개의 서버에 있음`)
    }
  })