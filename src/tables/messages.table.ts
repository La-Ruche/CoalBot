import * as app from "../app.js"

export interface Messages {
  id: number 
  userID: string
  content: string
  messageID: string
  channelID: string
  created_at: string
}

export default new app.Table<Messages>({
  name: "messages",
  description: "The messages.table table",
  setup: (table) => {
    table.integer("id").primary()
    table.string("userID")
    table.text("content")
    table.string("messageID")
    table.string("channelID")
    table.timestamp("created_at").defaultTo(app.dayjs().valueOf())
  },
})