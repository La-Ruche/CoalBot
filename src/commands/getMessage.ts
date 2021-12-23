import * as app from "../app.js"
import messagesTable, { Messages } from "../tables/messages.table.js"

export default new app.Command({
  name: "getMessage",
  guildOwnerOnly: true,
  description: "The getMessage command",
  channelType: "all",
  async run(message) {
    messagesTable.query.select("*").where("userID", message.author.id).then((data) => {
      data.forEach(item => {
        message.send(`> ${item.content}`)
      })
    })
  }
})