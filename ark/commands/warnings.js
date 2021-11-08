const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {

const user = message.mentions.members.first() || message.author
let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
 if(warnings === null) warnings = 0;
  message.channel.send(`${user} have **${warnings}** warning(s)`)
  

}
module.exports.config = {
    command: "warnings",
    aliases: ['warns']
}