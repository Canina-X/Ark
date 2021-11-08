module.exports.run = async (client, message, args, Discord) =>{ 
  let deleteCount = parseInt(args[0], 10)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You should have manage messages perms to use this command!")
    }
  if (deleteCount > 100) {
    deleteCount = 100
    message.channel.send('Can handle only 100 messages. Deleting 100 messages').then(e => setTimeout(() => e.delete(), 2000))
  }
  if (Number.isNaN(deleteCount)) deleteCount = 1
  try {
    await message.delete()
    const fetched = await message.channel.messages.fetch({ limit: deleteCount })
    await message.channel.bulkDelete(fetched)
  } catch (error) {
    message.reply(`Couldn't delete messages because of: ${ error }`)
      .then(el => setTimeout(() => el.delete(), 5000))
    return 0
  }
   const embed = new Discord.MessageEmbed()
        .setTitle(`Succesfully purged  ${ deleteCount } ${ deleteCount === 1 ? 'message' : 'messages' } `)
        .setColor(`#b22222`)
  message.channel.send(embed).then(el => setTimeout(() => el.delete(), 3000))
  return 0
}
module.exports.config = {
    command: "purge",
    aliases: ['delete']
}