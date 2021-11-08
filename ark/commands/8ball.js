module.exports.run = async (client, message, args, Discord) =>{ 
    try{
    if(!args[0]) return message.channel.send(`You need to give something to ask me`)
    let number = Math.floor(Math.random() * 6);
    if (number == 0) {
        return message.channel.send('Yes, definitely so.')
    }
    if (number == 1) {
        return message.channel.send('No, definitely not.')
    }
    if (number == 2) {
        return message.channel.send('Ask again later.')
    }
    if (number == 3) {
        return message.channel.send('It is uncertain.')
    }
    if (number == 4) {
        return message.channel.send('Odds are not in your favor.')
    }
    if (number == 5) {
        return message.channel.send('Odds are in your favor.')
    }
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured in 8ball.js Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "8ball",
    aliases: []
}