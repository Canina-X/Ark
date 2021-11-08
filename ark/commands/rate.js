module.exports.run = async (client, message, args, Discord) => {
    const user = message.mentions.users.first();
    let ratenumber = Math.floor(Math.random() * 10);
     return message.channel.send( user.username + ' was rated  ' + ratenumber + ' by '+ message.author.username)
}
module.exports.config = {
    command: "rate",
    aliases: []
}