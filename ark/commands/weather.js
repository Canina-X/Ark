const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
    if(!args[0]) {
        return message.channel.send(`Please enter a city`)
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=imperial&appid=d24348fa6bf0b63baa5f907d6d839a09`;

    let response, city;

    try {
        response = await axios.get(url);
        city = response.data
    } catch (e) {
        return message.channel.send(`Couldn't find that city`)
    }
    const embed = new Discord.MessageEmbed()
        .setTitle(`Weather in: ${city.name}`)
        .setColor(`#b22222`)
        .setThumbnail(`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`)
        .setDescription(city.weather[0].description)
        .addFields(
            {
                name: "Current Temperature: ",
                value: `${city.main.temp} °F`,
                inline: true
            },
            {
                name: "Weather: ",
                value: city.weather[0].main
            },
            {
                name: "Feels like: ",
                value: `${city.main.feels_like} °F`,
                inline: true
            },
            {
                name: "Highest: ",
                value: `${city.main.temp_max} °F`,
                inline: true
            },
            {
                name: "Lowest: ",
                value: `${city.main.temp_min} °F`,
                inline: true
            },
            {
                name: "Sunrise: ",
                value: city.sys.sunrise,
                inline: true
            },
            {
                name: "Sunrise: ",
                value: city.sys.sunset,
                inline: true
            }
        )

   message.channel.send(embed)

}
module.exports.config = {
    command: "weather",
    aliases: []
}