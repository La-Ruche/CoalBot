import * as app from "../app.js"

export default new app.Command({
  name: "avatar",
  description: "The avatar command",
  channelType: "all",
  async run(message) {
    const member = message.mentions.members?.first(),
      embed = new app.SafeMessageEmbed().setColor()

    member
      ? embed
          .setDescription(`L'avatar de ${member} :`)
          .setImage(member.user.displayAvatarURL({ size: 1024 }))
      : embed
          .setDescription(`Votre avatar :`)
          .setImage(message.author.displayAvatarURL({ size: 1024 }))

    message.channel.send({ embeds: [embed] })
  },
})
