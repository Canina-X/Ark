const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
    const url = "https://some-random-api.ml/img/cat";
    const facts = "https://some-random-api.ml/facts/cat"

    let image, response;
    let fact, responses;
    try {
        response = await axios.get(url);
        image = response.data;

        responses = await axios.get(facts)
        fact = responses.data

    } catch (e) {
        return message.channel.send(`An error occured, please try again!`)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(`Random Cat Image and Fact`)
        .setColor(`#b22222`)
        .setDescription(fact.fact)
        .setImage(image.link)

    await message.channel.send(embed)
}
module.exports.config = {
    command: "cat",
    aliases: []
}