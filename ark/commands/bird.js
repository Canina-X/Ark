const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
    try{
    const url = "https://some-random-api.ml/img/birb";

    let image, response;
    try {
        response = await axios.get(url);
        image = response.data;


    } catch (e) {
        return message.channel.send(`An error occured, please try again!`)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(`Random Bird Image `)
        .setColor(`#b22222`)
        .setImage(image.link)

     message.channel.send(embed) 
    }catch(err){
        client.users.cache.get(`432941333682847744`).send(`A error occured at bird.js Err: ${err}`)
    }
}
module.exports.config = {
    command: "bird",
    aliases: []
}