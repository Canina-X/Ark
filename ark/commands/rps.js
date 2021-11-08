module.exports.run = async (client, message, args, Discord) => {
    return message.channel.send( message.author.username + ' has started a rock paper scisor game choose either `,rock` `,paper` `,scissor` ' )
}
module.exports.config = {
    command: "rps",
    aliases: ['rock paper scissor']
}