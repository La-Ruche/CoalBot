import * as app from "../app.js"

export default new app.Command({
  name: "kick",
  description: "The kick command",
  channelType: "guild",
  userPermissions: ["KICK_MEMBERS"],
  botPermissions: ["KICK_MEMBERS"],
  positional: [
    {
      name: "user",
      description: "User kick",
      required: true,
    },
    {
      name: "reason",
      description: "Reason of kick",
    },
  ],
  async run(message) {
    const member = message.guild.members
    const embed = new app.SafeMessageEmbed().setColor("RED")

    if (!message.args.reason) message.args.reason = "No reason"

    member.kick(message.args.user, message.args.reason).catch((err) => {
      embed
        .setAuthor("Error", message.client.user.displayAvatarURL())
        .setDescription(
          app.code.stringify({
            content: err.split("").reverse().slice(0, 2000).reverse().join(""),
          })
        )
      if (err) return message.channel.send({ embeds: [embed] })
    })

    embed
      .setColor()
      .setTitle("Membre Kick")
      .addFields(
        { name: "User Kick", value: `${member}` },
        { name: "Kick par", value: `${message.author}` },
        { name: "Raison", value: `${message.args.reason}` }
      )

    message.channel.send({ embeds: [embed] })
  },
})
