import * as app from "../app.js"

export default new app.Command({
  name: "ban",
  description: "The ban command",
  channelType: "all",
  async run(message) {
    const gifs = ["https://media.giphy.com/media/3wEF975f9xwpa/giphy.gif", "https://media.giphy.com/media/SN0nhS5rpqAk2LR5Bn/giphy.gif", "https://media.giphy.com/media/iJ1did22kFIXu3e67u/giphy.gif", "https://media.giphy.com/media/Yj6cVAQeElz5Q1msSU/giphy.gif"]

    const embed = new app.MessageEmbed()
      .setDescription("This is a test embed")
      .setImage(gifs[Math.floor(Math.random() * gifs.length)])
      .setColor("#ff0000")

    message.channel.send({embeds: [embed]})
  }
})