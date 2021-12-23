import * as app from "../app.js"

export default new app.Command({
  name: "emit.test",
  description: "The emit.test command",
  channelType: "all",
  botOwnerOnly: true,
  async run(message) {
    // todo: code here
    let eventEmit = 'guildMemberRemove'
    let params = message.member

    message.client.emit(eventEmit, params)

    return message.send(`Emit \`${eventEmit}\` fait ! Avec le(s) paramètre(s) \`${params}\``)
  }
})