import * as app from "../app.js"

export default new app.Command({
  name: "slash",
  description: "The slash command",
  channelType: "all",
  slash: {
    name: "slash",
    description: "The slash command",
  },
  guilds: ["781105165754433537"],
  async run(message: app.Interaction) {
    // todo: code here
    // return message.send("slash command is not yet implemented.")
    return message.channel?.send("slash command is not yet implemented.")
  }
})