const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
try{
        const url = 'https://some-random-api.ml/animu/face-palm';

    let response, data;
  
        response = await axios.get(url);
        data = response.data;

    const embed = new Discord.MessageEmbed()
        .setColor(`#b22222`)
        .setTitle(`${message.author.username} facepalms himself`)
        .setImage(data.link)

    message.channel.send(embed) 
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "facepalm",
    aliases: []
}