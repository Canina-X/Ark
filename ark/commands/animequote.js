const axios = require('axios');

module.exports.run = async (client, message, args, Discord) => {
try{



        const url = 'https://some-random-api.ml/animu/quote';

    let response, data;
  
        response = await axios.get(url);
        data = response.data;

    const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} motivates himself with a anime quote`)
        .setColor(`#b22222`)
        .addFields(
      { name: 'quote', value: data.sentence, inline: true},
      { name: 'characther', value: data.characther, inline: true},
      { name: 'anime', value: data.anime, inline: true},

    )

    message.channel.send(embed) 


}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error occured at animequote.js Err: ${err}`)
}
}
module.exports.config = {
    command: "animequote",
    aliases: ['aquote', 'aq']
}