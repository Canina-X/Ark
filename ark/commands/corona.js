const axios = require('axios')
module.exports.run = async (client, message, args, Discord) => {
    try{
    const baseUrl = "https://corona.lmao.ninja/v2";

    let url, response, corona;

    try {
        url = args.join(" ") ? `${baseUrl}/countries/${args.join(" ")}`:`${baseUrl}/all`
        response = await axios.get(url)
        corona = response.data
    } catch (error) {
        return message.channel.send(`***${args.join(" ")}*** doesn't exist, or data isn't being collected`)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(args.join(" ") ? `${args.join(" ").toUpperCase()} Stats` : 'Total Corona Cases World Wide')
        .setColor(`#b22222`)
        .setThumbnail(args.join(" ") ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
        .addFields(
            {
                name: 'Total Cases:',
                value: corona.cases.toLocaleString(),
                inline: true
            },
            {
                name: 'Total Deaths:',
                value: corona.deaths.toLocaleString(),
                inline: true
            },
            {
                name: 'Total Recovered:',
                value: corona.recovered.toLocaleString(),
                inline: true
            },
            {
                name: 'Active Cases:',
                value: corona.active.toLocaleString(),
                inline: true
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: true
            },
            {
                name: 'Critical Cases:',
                value: corona.critical.toLocaleString(),
                inline: true
            },
            {
                name: 'Today Recoveries:',
                value: corona.todayRecovered.toLocaleString().replace("-", ""),
                inline: true
            },
            {
                name: 'Todays Deaths:',
                value: corona.todayDeaths.toLocaleString(),
                inline: true
            })

     message.channel.send(embed)
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "corona",
    aliases: []
}