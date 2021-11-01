import * as app from "../app.js"

export default new app.Command({
  name: "lock",
  description: "The lock command",
  channelType: "guild",
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  async run(message) {
    message.channel.permissionOverwrites.edit("RoleID", {
      SEND_MESSAGES: false,
    })
  },
})
