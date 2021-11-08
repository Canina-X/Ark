const {Developers} = require('../Config Files/config.json');
const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {
    try{
    let author = message.author.id;
    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${author}`)
    

    if (!user) {
        return message.channel.send('you forgot to mention somebody.')
    }
    if (!args[1]) {
        return message.channel.send('Please specify an amount.')
    }
    if (message.content.includes('-')) { 
        return message.channel.send('Negative money can not be paid.')
    }

    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }

    message.channel.send(`${message.author.tag}, You successfully paid ${user.user.username} ${args[1]}$.`)
    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${author}`, args[1])

 
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "pay",
    aliases: ['give']
}