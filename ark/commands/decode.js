const axios = require('axios')
module.exports.run = async (client, message, args, Discord) => {
    try{
    if(!args[0]) return message.channel.send(`Please give a binary code to decode`);
    if(isNaN(args.join(" "))) return message.channel.send(`that is not a binary code...`)
    const url = `http://some-random-api.ml/binary?decode=${args.join(" ")}`;

    let response, data;
        response = await axios.get(url);
        data = response.data;
 

    const embed = new Discord.MessageEmbed()
        .setColor(`#b22222`)
        .setTitle('Decode Binary')
        .setDescription(data.text)

    await message.channel.send(embed).then(() => message.channel.stopTyping());
}catch(e){
    message.channel.stopTyping();
    message.channel.send(`A error ouccured!: ${e}`)
}
}
module.exports.config = {
    command: "decode",
    aliases: []
}