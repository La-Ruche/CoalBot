import * as app from "../app.js"

export default new app.Command({
  name: "slowmode",
  description: "The slowmode command",
  channelType: "guild",
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  positional: [
    {
      name: "times",
      description: "Temps du slowmode (en seconde)",
      required: true,
    },
  ],
  async run(message) {
    const embed = new app.SafeMessageEmbed()

    if (isNaN(message.args.times)) {
      embed
        .setColor("RED")
        .setAuthor(
          "A number and expected",
          message.client.user.displayAvatarURL()
        )
        .setDescription("Le temps doit etre en chiffre.")

      return message.channel.send({ embeds: [embed] })
    }

    message.channel.setRateLimitPerUser(message.args.times)

    embed
      .setColor()
      .setDescription(
        `Le slowmode de se channel est maintenant à ${message.args.times}s`
      )

    message.channel.send({ embeds: [embed] })
  },
})
