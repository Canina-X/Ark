module.exports.run = async (client, message, args, Discord) => {
    let number = Math.floor(Math.random() * 3);
        
    if (number == 1) {
        return message.channel.send('opponent choose paper u win!!')
    }
    if (number == 2) {
        return message.channel.send('opponent choose rock u lose')
    }
    if (number == 0) {
        return message.channel.send('opponent choose scissor its a tie')
    }
}
module.exports.config = {
    command: "scissor",
    aliases: []
}