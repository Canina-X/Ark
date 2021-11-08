const axios = require('axios')
module.exports.run = async (client, message, args, Discord) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase());
    const url = 'https://some-random-api.ml/animu/wink';

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`An error occured!`)
    }

    const embed = new Discord.MessageEmbed()
        .setColor(`#b22222`)
        .setTitle(`${message.author.username} winks at ${member.user.username}`)
        .setImage(data.link)

     message.channel.send(embed)
}
module.exports.config = {
    command: "wink",
    aliases: []
}