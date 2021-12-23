import * as app from "../app.js"

export default new app.Command({
  name: "db.test",
  description: "The testDB command",
  channelType: "all",
  async run(message) {
    app.moderation.get("warn", message.author).then((data) => {
      console.log(data)
    })
  },
})
