const db = require('quick.db')
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    
    let timeout =5000
let amount = 500;
    
let rob = await db.fetch(`rob_${message.author.id}`)

if(rob != null && timeout - (Date.now() - rob) > 0){

let time = ms(timeout - (Date.now() - rob));
message.channel.send(`next robbery can happen in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
}else{
    db.add(`rob_${message.author.id}`, Date.now())
    if (!user) {
        return message.channel.send('Sorry, you forgot to mention somebody.')
    }
    if (author < 250) { 
        return message.channel.send(':x: You need atleast 250$ to rob somebody.')
    }

    if (targetuser < 0) { 
        return message.channel.send(`:x: ${user.user.username} does not have anything to rob.`)
    }

    let robchance = Math.floor(Math.random() * 4) + 1; 
    if(robchance = 1){
    let random = Math.floor(Math.random() * 200) + 1; 
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} you robbed ${user} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
}else{
      let failedrobbery = 250;
      let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} you failed trying to rob ${user} you paid a fine of 250$ !`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)
    db.subtract(`money_${message.author.id}`, failedrobbery)
}
}
}
module.exports.config = {
    command: "rob",
    aliases: []
}