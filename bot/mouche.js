let discord = require("discord.js")
let client = new discord.Client()
client.on("guildMemberRemove",(memb)=>{
    memb.guild.channels.cache.find(e=>e.name=="général").send("<@" + memb.id + "> a pris la mouche (a quitté le Molec)")
})
client.login("NTQ0OTUyNzYxODkzMjU3MjMx.XGMUzw.hGP0lr47BmIwMhdFqSOgC-qGRm4")
