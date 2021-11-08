const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
    try{
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase());
    const url = 'https://some-random-api.ml/animu/hug';

    let response, data;
  
        response = await axios.get(url);
        data = response.data;

    const embed = new Discord.MessageEmbed()
        .setColor(`#b22222`)
        .setTitle(`${message.author.username} hugs ${member.user.username}`)
        .setImage(data.link)

    message.channel.send(embed)
    }catch(err){
      return  message.channel.send(`A error ouccured!`)
    }
}
module.exports.config = {
    command: "hug",
    aliases: []
}