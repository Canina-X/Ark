const {Developers} = require('../Config Files/config.json');
const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {
 if (!Developers.includes(message.author.id)) {
        return message.channel.send(`You cannot use this command!`)
    }
  let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) 
    db.subtract(`money_${user.id}`, args[0])
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("RED") 
    .setTimestamp()
    message.channel.send(embed)


}
module.exports.config = {
    command: "remove",
    aliases: ['removemoney']
}