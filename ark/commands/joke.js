const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {

const jokes = 'https://some-random-api.ml/joke';

let joke, responses;
try {

    responses = await axios.get(jokes);
    joke = responses.data;

}
catch (e) {
    return message.channel.send('An error occured, please try again!');
}

const embed = new Discord.MessageEmbed()
    .setTitle('well its a joke!')
    .setColor(`#b22222`)
    .setDescription(joke.joke)


await message.channel.send(embed);

}
module.exports.config = {
    command: "joke",
    aliases: []
}