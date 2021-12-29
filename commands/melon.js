const discord = require("discord.js")

module.exports = {
    name: "멜론",
    execute(message, args) {

        message.channel.startTyping()
        message.channel.send(`<@${message.author.id}> 불러오는 중...`).then((th) => {
            let cheerio = require("cheerio")
            let request = require("request")

            let url = "http://www.melon.com/chart/"
            let title = new Array(),
                artist = new Array(),
                up_date,
                up_time
            let rank = 10 //10위까지 확인

            request(url, function (error, response, html) {
                if (!error) {
                    let $ = cheerio.load(html)
 
                    // 곡명 파싱
                    for (let i = 0; i < rank; i++) {
                        $(".ellipsis.rank01 > span > a").each(function () {
                            let title_info = $(this)
                            let title_info_text = title_info.text()
                            title[i] = title_info_text
                            i++
                        })
                    }

                    // 아티스트명 파싱
                    for (let i = 0; i < rank; i++) {
                        $(".checkEllipsis").each(function () {
                            let artist_info = $(this)
                            let artist_info_text = artist_info.text()
                            artist[i] = artist_info_text
                            i++
                        })
                    }

                    // 업데이트 날짜
                    $(".year").each(function () {
                        let date_info = $(this)
                        let date_info_text = date_info.text()
                        up_date = date_info_text
                    })

                    // 업데이트 시간
                    $(".hhmm > span").each(function () {
                        let time_info = $(this)
                        let time_info_text = time_info.text()
                        up_time = time_info_text
                    })

                    //xxxx년 xx월 xx일 오후/오전 xx시 format
                    var up_date_arr = new Array()
                    var up_date_arr = up_date.split(".")
                    var up_time_arr = new Array()
                    var up_time_arr = up_time.split(":")
                    let newtime

                    // 오후 오전 삽입
                    if (up_time_arr[0] > 12) {
                        up_time_arr[0] = up_time_arr[0] - 12
                        newtime = "오후 " + up_time_arr[0]
                    } else {
                        newtime = "오전 " + up_time_arr[0]
                    }

                    let embed = new discord.MessageEmbed()
                    embed.setColor("#5fe9ff")
                    embed.setTitle(`멜론 차트 1 ~ ${rank}위`)
                    let description = '';
                    for (let i = 0; i < 10; i++) {
                        description += `${i + 1}위 ${title[i]} - ${artist[i]}\n`
                        embed.setDescription(description)
                        embed.setFooter(`${up_date_arr[0]}년 ${up_date_arr[1]}월 ${up_date_arr[2]}일 ${newtime}시에 업데이트됨`)
                        th.edit(`<@${message.author.id}> 현재 멜론차트 순위`, { embed: embed })
                    }
                    message.channel.stopTyping()
                }
            });
        })
    }
}