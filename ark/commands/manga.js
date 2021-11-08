const fetch = require('node-fetch')
const querystring = require('querystring');
module.exports.run = async (client, message, args, Discord) => {
  const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
  if (!args.length){
    return message.channel.send('You need to provide a search term!');
  }
  const query = querystring.stringify({ term: args.join(' ') });
  const { results } = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}`).then(response => response.json());
  if(!results.length) {
    return message.channel.send(`No results found for ${args}`);
  }
  const [answer] = results;
  const embed = new Discord.MessageEmbed()
    .setTitle(answer.title)
    .setColor(`#b22222`)
    .setURL(answer.url)
    .setThumbnail(answer.image_url)
    .setDescription(answer.synopsis)
    .setFooter('Powered by Jikan.moe and My Anime List')
    .addFields(
      { name: 'Rating', value: answer.score, inline: true},
      { name: 'Type', value: answer.type, inline: true},
      { name: 'Chapters', value: answer.chapters, inline: true},
      { name: 'Volumes', value: answer.volumes, inline: true},
    )
    .addFields(
      { name: 'Aired From', value: answer.start_date, inline: true},
      { name: 'Aired Till', value: answer.end_date, inline: true},
    );
  message.channel.send(embed);
}
module.exports.config = {
  command: "manga",
    aliases: []
}