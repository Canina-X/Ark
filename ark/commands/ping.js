module.exports.run = async (client, message, args, Discord) => {
  let Embed = new Discord.MessageEmbed()
  .setTitle(`🏓 Pong!`)
  .setDescription(`My ping is ${Math.round(client.ws.ping)}ms`)
  .setColor(`#b22222`)
  .setTimestamp()
  message.channel.send(Embed)
}
module.exports.config = {
    command: "ping",
    aliases: []
}