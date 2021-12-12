import * as app from "../app.js"

const listener: app.Listener<"guildMemberRemove"> = {
  event: "guildMemberRemove",
  description: "A guildMemberRemove listener",
  async run(member) {

    function getThread(
      channel: app.TextChannel, 
      threadName: string
      ): app.ThreadChannel | undefined
    {
      return channel.threads.cache.find(thread => thread.name === threadName)
    }

    function createThread(
      channel: app.TextChannel,
      threadName: string
    ): Promise<app.ThreadChannel> | undefined 
    {
     return channel.threads.create({name: threadName})
    }

    app.channelsType.get("logs").then(data => {
      member.guild.channels.fetch(data[0]?.channelID).then(channel => {
        let thread = getThread(<app.TextChannel>channel, 'membre-partie')
  
        // Verification que le thread existe
        if (typeof thread !== 'undefined') {
          thread.send(`${member.user} a quitté le serveur.`)
        } else {
          // Création du thread
          createThread(<app.TextChannel>channel, 'membre-partie')?.then(thread => {
            thread.send(`${member.user} a quitté le serveur.`)
          })
        }
      })
    })

  }
}

export default listener