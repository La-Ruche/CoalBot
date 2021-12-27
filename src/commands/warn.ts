import * as app from "../app.js"

export default new app.Command({
  name: "warn",
  description: "The warn command",
  channelType: "guild",
  userPermissions: ["MANAGE_MESSAGES"],
  async run(message) {
    const embed = new app.MessageEmbed()
      .setTitle("Warn")
      .setDescription(`Selectionnez l'evenement à avertir :\n\`${process.env.BOT_PREFIX}warn add [@user] [raison]\`\n\`${process.env.BOT_PREFIX}warn remove [@user] [raison]\``)
      .setColor("#2193b0")

    return message.channel.send({embeds: [embed]})
  },
  subs: [
    new app.Command<"guild">({
      name: "add",
      description: "The add warn command",
      positional: [
        {
          name: "user",
          description: "The user to add a warn to",
          castValue: "user",
          required: true,
        }
      ],
      rest: {
        name: "reason",
        description: "The reason for the warn",
      },
      async run(message) {
        app.moderation.add({
          action: "warn",
          author: message.author.id,
          user: message.args.user.id,
          reason: message.args.reason,
        })
        
        return message.send("Test")
      }
    })
  ]
})