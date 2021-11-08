const fetch = require('node-fetch')
const querystring = require('querystring')
module.exports.run = async (client, message, args, Discord) => {
    try{
  const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
  if (!args.length){
    return message.channel.send('You need to provide a search term!');
  }
  const anime = querystring.stringify({ term: args.join(' ')});
  const { results } = await fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}`).then(response => response.json());
  if(!results.length) {
    return message.channel.send(`No results found for ${args}`);
  }
  const [answer] = results;
  const id = answer.mal_id
  const { url, image_url ,title, synopsis, type, episodes, status, aired, rating, score, rank, genres} = await fetch(`https://api.jikan.moe/v3/anime/${id}`).then(response => response.json());
    var sep = "";
  var x;
  for (x in genres) {
   sep += genres[x].name + ", ";
  }
  const embed = new Discord.MessageEmbed()
  	.setColor('#b22222')
    .setTitle(title)
    .setURL(url)
    .setThumbnail(image_url)
    .setDescription(synopsis)
    .setFooter('Powered by Jikan.moe and My Anime List')
    .addFields(
      { name: 'Rating', value: rating, inline: true},
      { name: 'Rank', value: rank, inline: true},
      { name: 'Type', value: type, inline: true},
      { name: 'Episodes', value: episodes, inline: true},
    )
    .addFields(
      { name: 'Score', value: score, inline: true},
      { name: 'Aired', value: aired.string, inline: true},
      { name: 'Status', value: status, inline: true},
    )
    .addField('Genre', `${sep}`, true)
  message.channel.send(embed);
    }catch(err){
        client.users.cache.get(`432941333682847744`).send(`Error at anime.js Err: ${err}`)
        return;
    }
}
module.exports.config = {
  command: "anime",
    aliases: []
}