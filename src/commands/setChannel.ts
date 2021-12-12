import * as app from "../app.js"

export default new app.Command({
  name: "setChannel",
  description: "The set command",
  channelType: "guild",
  userPermissions: ["MANAGE_CHANNELS"],
  positional: [
    {
      name: "name",
      description: "The name of the channel",
      required: true,
    },
    {
      name: "id",
      description: "The id of the channel",
    }
  ],
  async run(message) {
    // todo: code here
    let channelID = message.channel.id;

    if (message.args.id) {
      channelID = message.args.id;
    }

    app.channelsType.insert(message.args.name, channelID, message.author.id)

    return message.send("Command executer.")
  }
})