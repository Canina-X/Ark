const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {
let timeout = 5;
    
let work = await db.fetch(`work_${message.author.id}`)

if(work != null && timeout - (Date.now() - work) > 0){

let time = ms(timeout - (Date.now() - work));
message.channel.send(`You aldready collected your work reward **Dont Be Greedy** next collection can occur in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
}else{


if(!args[0]){

message.channel.send(`correct user is ,work doctor / ,work constructor / ,work developer`)

}


  if (args[0] == 'doctor') {
        db.add(`work_${message.author.id}`, Date.now())
        let amount = Math.floor(Math.random() * 500) + 1; 

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a doctor & got payed ${amount}$ for having working! :D`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'constructor') {
        db.add(`work_${message.author.id}`, Date.now())
        let amount = Math.floor(Math.random() * 500) + 1; 

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for rebuilding the empire state building.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'developer') {
        db.add(`work_${message.author.id}`, Date.now())
        let amount = Math.floor(Math.random() * 500) + 1; 

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
}
}
}
module.exports.config = {
    command: "work",
    aliases: []
}