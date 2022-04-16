import figlet from "figlet"
import boxen from "boxen"
import chalk from "chalk"

import * as app from "../app.js"

const listener: app.Listener<"ready"> = {
  event: "ready",
  description: "Just log that bot is ready",
  once: true,
  async run(client: app.Client) {

    app.commands.each(cmd => {
      if (cmd.options.slash) {

        if (cmd.options.guilds) {
          cmd.options.guilds.forEach(guild => {
            client.guilds.cache.get(guild)?.commands.create(cmd.options.slash as app.ApplicationCommandData).then(slash => {
              console.log(`Created command ${chalk.green(slash.name)} in ${chalk.green(guild)}`)
              if (cmd.options.slashPermissions) {
                slash.permissions.add({
                  permissions: cmd.options.slashPermissions
                })
              }
            })
          })
        } else {
          client.application?.commands.create(cmd.options.slash).then(slash => {
            console.log(`Created command ${chalk.green(slash.name)}`)
            if (cmd.options.slashPermissions) {
              client.guilds.cache.forEach(guild => {
                slash.permissions.add({
                  guild: guild,
                  permissions: cmd.options.slashPermissions as app.ApplicationCommandPermissionData[]
                })
              })
            }
          })
        }
        
      }
    }) 

    app.log(
      `Ok i'm ready! ${chalk.blue(
        "My default prefix is"
      )} ${chalk.bgBlueBright.black(process.env.BOT_PREFIX)}`
    )

    figlet(app.fetchPackageJson().name, (err, value) => {
      if (err) return app.error(err, "ready.native", true)

      console.log(
        boxen(chalk.blueBright(value), {
          float: "center",
          borderStyle: {
            topLeft: " ",
            topRight: " ",
            bottomLeft: " ",
            bottomRight: " ",
            top: " ",
            left: " ",
            right: " ",
            bottom: " ",
          },
        })
      )
    })
  },
}

export default listener
