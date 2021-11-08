const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {
try{
let timeout =5000
let amount = 500;
    
let daily = await db.fetch(`daily_${message.author.id}`)

if(daily != null && timeout - (Date.now() - daily) > 0){

let time = ms(timeout - (Date.now() - daily));
message.channel.send(`You aldready collected your daily reward **Dont Be Greedy** next collection can occur in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
}else{

let embed = new Discord.MessageEmbed()
.setAuthor(`Daily`, message.author.displayAvatarURL)
.setColor(`#b22222`)
.setDescription(`Have Fun with your daily reward!`)
.addField(`Collected`, amount);
message.channel.send(embed)

db.add(`money_${message.author.id}`, amount)
db.add(`daily_${message.author.id}`, Date.now())
}
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "daily",
    aliases: ['dailyreward']
}