import * as app from "../app.js"

export default new app.Command({
  name: "together",
  description: "The together command",
  channelType: "guild",
  positional: [{
    name: "channel",
    description: "The channel voice channel ID",
    required: true,
  }],
  async run(message) {
    let activities = [
      {
        label: "Watch Together",
        description: "Watch Youtube !",
        emoji: "📺",
        value: "880218394199220334",
      },
      {
        label: "Poker Night",
        description: "Play Poker Night",
        emoji: "🎭",
        value: "755827207812677713",
      },
      {
        label: "Chess In The Park",
        description: "Play Chess In The Park !",
        emoji: "♟",
        value: "832012774040141894",
      },
      {
        label: "Awkword",
        description: "Play Awkword !",
        emoji: "🎈",
        value: "879864070101172255",
      },
      {
        label: "Putts",
        description: "Play Putts !",
        emoji: "🎈",
        value: "832012854282158180",
      },
      {
        label: "Doodle Crew",
        description: "Play Doodle Crew !",
        emoji: "🎈",
        value: "878067389634314250",
      },
      {
        label: "Letter Tile",
        description: "Play Letter Tile !",
        emoji: "🎈",
        value: "879863686565621790",
      },
      {
        label: "Word Snacks",
        description: "Play Word Snacks !",
        emoji: "🎈",
        value: "879863976006127627",
      },
      {
        label: "SpellCast",
        description: "Play SpellCast !",
        emoji: "🎈",
        value: "852509694341283871",
      },
      {
        label: "CG3 Prod",
        description: "Play CG3 Prod !",
        emoji: "🎈",
        value: "832013003968348200",
      },
    ]

    let select = new app.MessageSelectMenu()
      .setCustomId("select-together")
      .setPlaceholder("Selection une activité !")
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions(activities)

    const row = new app.MessageActionRow().addComponents(select)
    // todo: code here
    message.send({content: "together command is not yet implemented.", components: [row]})

    message.client.on("interactionCreate", interaction => {
      if (
        interaction.isSelectMenu() &&
        interaction.customId == "select-together"
      ) {
        let invite = interaction.guild?.invites.create(message.args.channel, {targetApplication: interaction.values[0], targetType: 2})
        invite?.then(i => {
          return interaction.reply(`Voila le code : ${i.url}`)
        })
      }
    })
  },
})
