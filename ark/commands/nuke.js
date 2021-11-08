const { MessageEmbed } = require('discord.js')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

module.exports.run = async (client, message, args) => {
    try{
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You should have manage messages perms to use this command!")
    }
    
  let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
    let position = channel.position
    let newChannel = await channel.clone()
    newChannel.setPosition(position)
    newChannel.send(`${message.author.toString()} just nuked ${channel.toString()}! This is the new channel, happy chatting!`)
    channel.send(`${message.author.toString()} just nuked this channel! Quick head over to ${newChannel} to continue chatting!`)
    let counter = 5
    let interval = setInterval(function(){
      channel.send(counter)
      counter--
    }, 1000)
    await sleep(counter * 1000)
    clearInterval(interval)
    channel.delete()
    }catch(err){
        
        console.log("error in nuke.js")
        
    }
}
module.exports.config = {
    command: "nuke",
    aliases: ['nchannel','nukechannel','channelnuke'],
    description: "deletes all the messages inside a channel"
}