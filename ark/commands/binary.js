const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
    try{
    if(!args[0]) return message.channel.send(`Please give a text to make binary`)
    message.channel.startTyping();
    const url = `http://some-random-api.ml/binary?text=${args.join(" ")}`;

    let response, data;
        response = await axios.get(url);
        data = response.data;
   

    const embed = new Discord.MessageEmbed()
        .setTitle('Text to Binary')
        .setColor(`#b22222`)
        .setDescription(data.binary)

     message.channel.send(embed).then(() => message.channel.stopTyping())
    }catch(e){
        message.channel.stopTyping();
        message.channel.send(`A error ouccured!`)
        client.users.cache.get(`432941333682847744`).send(`a error ouccured on binary.js err: ${e}`)
    }
    
}
module.exports.config = {
    command: "binary",
    aliases: []
}