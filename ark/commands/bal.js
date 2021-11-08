const db = require('quick.db');
module.exports.run = async (client, message, args, Discord) => {
    
    
try{
 const user =  message.mentions.users.first() || message.author ;
let money = db.fetch(`money_${user.id}`)
if (money === null){
money = 0
}
let embed = new Discord.MessageEmbed()
    .setAuthor(`Balance`, user.displayAvatarURL)
    .setTitle(`balance of ${user.username} is ${money}`)
    .setColor("RED") 
    .setTimestamp()
    message.channel.send(embed)
}catch(err){
        client.users.cache.get(`432941333682847744`).send(`A error occured in bal.js Err: ${err}`)
    }
}
module.exports.config = {
    command: "bal",
    aliases: ['balance']
}