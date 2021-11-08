module.exports.run = async (client, message, args, Discord) => {
    let number = Math.floor(Math.random() * 3);
        
    if (number == 1) {
        return message.channel.send('opponent choose paper its a tie')
    }
    if (number == 2) {
        return message.channel.send('opponent choose rock u win!!')
    }
    if (number == 0) {
        return message.channel.send('opponent choose scissor u lose :( ')
    }
}
module.exports.config = {
    command: "paper",
    aliases: []
}