module.exports = {
    name: '킥',
    cooldown : 1,
    execute(message){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("권한이 없습니다 (필요 권한 : 킥 )")
        if(message.mentions.members.first()){
            try{
                message.mentions.members.first().kick().then(()=>{
                    const embed = Discord.coll
                    return message.reply(`성공적으로 ${message.mentions.members.first()}유저를 추방했습니다.`)
                }).catch((error)=>{
                    return message.reply(`오류가 발생했습니다 오류 내용은 아래와 같습니다. \n${error}`)
                })
            }catch(error){
                return message.reply("봇에 유저를 추방할 권한이 없습니다.");
            }    
        }else{
            return message.reply("추방할 유저를 멘션해주세요. : -킥 <맨션>")
        }
    }
}
