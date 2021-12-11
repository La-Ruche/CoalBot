import * as app from "../app.js"

export interface Messages {
  // type of table
}

export default new app.Table<Messages>({
  name: "messages.table",
  description: "The messages.table table",
  setup: (table) => {
    table.integer("id").primary()
    table.string("userID")
    table.text("content")
    table.string("messageID")
    table.timestamp("created_at").defaultTo(app.dayjs().valueOf())
  },
})