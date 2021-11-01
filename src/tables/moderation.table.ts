import * as app from "../app.js"

export interface Moderation {
  id: string
  action: string
  author: string
  user: string
  reason: string
}

export default new app.Table<Moderation>({
  name: "moderation",
  description: "The moderation table",
  setup: (table) => {
    table.integer("id").primary()
    table.string("action")
    table.string("author")
    table.string("user")
    table.string("number")
    table.string("reason")
    table.timestamp("created_at").defaultTo(app.dayjs().valueOf())
  },
})
