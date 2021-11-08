module.exports.run = async (client, message, args, Discord) => {
    let number = Math.floor(Math.random() * 3);
        
    if (number == 1) {
        return message.channel.send('opponent choose paper u lose')
    }
    if (number == 2) {
        return message.channel.send('opponent choose rock its a tie')
    }
    if (number == 0) {
        return message.channel.send('opponent choose scissor u win!!')
    }
}
module.exports.config = {
    command: "rock",
    aliases: []
}