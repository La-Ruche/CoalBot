import Discord from "discord.js"
import { moderation } from "../app.js"

import moderations from "../tables/moderation.table.js"

interface Data {
  action: string
  author: string
  user: string
  reason: string
}

interface getDataRender {
  count: number
  data: {
    first: object
    last: object
    all: object[]
  }
}

export async function get(
  actionName: string,
  user: Discord.User
): Promise<getDataRender> {
  const result = await moderations.query
    .where({
      user: user.id,
      action: actionName,
    })
    .select()
    .then((data) => {
      return {
        count: data.length,
        data: {
          first: data[0],
          last: data[data.length - 1],
          all: data,
        },
      }
    })

  return result
}

export async function getAll() {
  const result = await moderations.query.select().then((data) => {
    return data
  })

  return result
}

export async function find() {
    
}

export async function add(data: Data) {
  await moderations.query.insert(data)
}
