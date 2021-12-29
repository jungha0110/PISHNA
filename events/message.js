const request = require('request')
const headers = { Authorization: "핑퐁빌더 api key", "Content-Type": "application/json" }
const {prefixs} = require('../config.json')
const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = async (message) => {
if (message.content.startsWith(prefixs)) {
    const text = message.content.split(prefixs)[1]
    const command = message.content.split(prefixs)[1].split(" ")[0]

    const commands = readdirSync(join(__dirname, "../commands")).filter(file => file.endsWith(".js"));
    let keys = Object.keys(commands && command)
    let str = ""
    for (let k of keys) {
      str += commands[k].callSign + "," + commands[k]
    }

    if (str.includes(commands) === false) {
        let dataString = "{request: {query: " + text + "}}"
  
        let options = {
          url: "핑퐁빌드 api url",
          method: "POST",
          headers: headers,
          body: dataString,
        }
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            let msg = JSON.parse(body, null, 1).response.replies[0].text
            message.channel.send(msg)
          }
        }
        request(options, callback)
      }
    }
  }
