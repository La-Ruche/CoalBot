import * as app from "../app.js"

export default new app.Command({
  name: "unlock",
  description: "The unlock command",
  channelType: "guild",
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  async run(message) {
    message.channel.permissionOverwrites.edit("RoleID", { SEND_MESSAGES: true })
  },
})
