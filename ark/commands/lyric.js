const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
   let song = args.join(" ");
    const url = `https://some-random-api.ml/lyrics?title=${song}`;
  

    let data, response;

    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`An error occured, please try again!`)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(data.title)
        .setDescription(data.lyrics)
        .setColor(`#b22222`)
       .setThumbnail(data.thumbnail.genius)

    message.channel.send(embed)
}
module.exports.config = {
    command: "lyric",
    aliases: ['song']
}