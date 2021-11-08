const steam = require('steam-provider');
const provider = new steam.SteamProvider();
const cheerio = require('cheerio');
const axios = require('axios')
module.exports.run = async (client, message, args, Discord) => {
    var search = args.join(" ");
    provider.search(search, 1, "en", "us").then(async result => {
		if(!result.length){
			return message.channel.send(`Sorry! **${search}** did not yield any results.`);
        }
        else {
            var id = result[0].id;
            const html = await axios.get(result[0].url);
            const $ = await cheerio.load(html.data);
            provider.detail(`${id}`, "en", "us").then(async game => {
                var sep_gen = "";
  				var x;
  				for (x in game.genres) {
  				sep_gen += game.genres[x] + ", ";
                }
                var sep_ftr = "";
  				var x;
  				for (x in game.otherData.features) {
  				sep_ftr += game.otherData.features[x] + ", ";
                }
                const description = $('div.game_area_description').text();
                const embed = new Discord.MessageEmbed()
    			.setColor('#b22222')
                .setTitle(game.name)             	
                .setURL(result.url)
              //  .setDescription(description)
				.setImage(game.otherData.imageUrl)                
                .addFields(
                    {name: 'Price', value: `$${game.priceData.initialPrice}`, inline: true},
                    {name: 'Genres', value: sep_gen, inline: true},
                    {name: 'Features', value: sep_ftr, inline: true},
                    )
             	.addField('Score', game.otherData.metacriticScore, true)
                .setTimestamp()
                .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL());
             message.channel.send(embed);
            })
        }
    })
}
module.exports.config = {
    command: "steam",
    aliases: []
}