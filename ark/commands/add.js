const {Developers} = require('../Config Files/config.json');
const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {
    try{
 if (!Developers.includes(message.author.id)) {
        return message.channel.send(`You cannot use this command!`)
    }
let timeout =1
let amount = args.join(" ");
    
let add = await db.fetch(`add_${message.author.id}`)
let embed = new Discord.MessageEmbed()
.setAuthor(`idk`, message.author.displayAvatarURL)
.setColor(`#b22222`)
.setDescription(`Have Fun with your black money!`)
.addField(`Collected`, amount);
message.channel.send(embed)

db.add(`money_${message.author.id}`, amount)
db.add(`add_${message.author.id}`, Date.now())
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "add",
    aliases: ['moneyadd']
}