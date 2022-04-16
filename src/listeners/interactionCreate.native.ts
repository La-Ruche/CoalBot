import * as app from "../app.js"
import axios from "axios"
import { Console } from "console"

const listener: app.Listener<"interactionCreate"> = {
  event: "interactionCreate",
  description: "A interactionCreate listener",
  async run(interaction) {
    if (interaction.isApplicationCommand()) {
      let cmd = app.commands.resolve(interaction.command!.name)

      if (cmd) {
        cmd.options.run(interaction)
      }
    }

    if (
      interaction.isButton() &&
      interaction.customId.startsWith("pagination-")
    ) {
      const paginator = app.Paginator.getByMessage(interaction.message)

      if (paginator) return paginator.handleInteraction(interaction)
    }
  },
}

export default listener
