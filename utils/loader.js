const reqEvent = (event) => require(`../events/${event}`)

module.exports = (client) => {
    client.on("message", (message) => reqEvent("message")(message, client))
}