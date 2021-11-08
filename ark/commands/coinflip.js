const db = require('quick.db');
const ms = require('parse-ms')
module.exports.run = async (client, message, args, Discord) => {
 try{

    let amount = args.join(" ");    
    let member = db.fetch(`money_${message.author.id}`)

    if (!args[0]) {
        return message.channel.send('Please specify an amount.')
    }
    if (message.content.includes('-')) { 
        return message.channel.send('Negative money can not be paid.')
    }

    if (member < args[0]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }
    let number = Math.floor(Math.random() * 4);

    if (number == 1) {
        message.channel.send(`u Won u have earned ${amount}`)
        db.add(`money_${message.author.id}`, amount)
    }else{
        
         message.channel.send(`u lost u have lost ${amount}`)
        db.subtract(`money_${message.author.id}`, amount)
        
    }

}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}

}
module.exports.config = {
    command: "coinflip",
    aliases: ['flip']
}