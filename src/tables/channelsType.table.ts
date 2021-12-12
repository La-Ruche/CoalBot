import * as app from "../app.js"

export interface ChannelsType {
  // type of table
}

export default new app.Table<ChannelsType>({
  name: "channelsType",
  description: "The channelsType table",
  setup: (table) => {
    // setup table columns => http://knexjs.org/#Schema-Building
    table.increments("id").primary()
    table.string("name", 100).notNullable()
    table.string("channelID", 255).notNullable()
    table.string("add_by", 255).notNullable()
    table.timestamp("created_at").defaultTo(app.dayjs().valueOf())
  },
})