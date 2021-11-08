const axios = require('axios');
module.exports.run = async (client, message, args, Discord) => {
    
    if(!args[0]){
        
        message.channel.send('please enter a pokemon name after the command')
        
    }
    
   let pokemon = args.join(" ");
    const url = ` https://some-random-api.ml/pokedex?pokemon=${pokemon}`;
  

    let data, response;

    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`An error occured, please try again!`)
    }
let family = data.family.evolutionLine;
    console.log(family)
if(family === "[]" || family == ""){

family = "no evolution for this pokemon";

}

    const embed = new Discord.MessageEmbed()
        .setTitle(data.name)
.addFields(
      { name: 'Pokemon ID', value: data.id , inline: true},
      { name: 'type', value: data.type , inline: true},
      { name: 'species', value: data.species , inline: true},
      { name: 'abilities', value: data.abilities , inline: true},
      { name: 'height', value: data.height , inline: true},
      { name: 'weight', value: data.weight , inline: true},
      { name: 'base experience', value: data.base_experience , inline: true},
      { name: 'gender', value: data.gender , inline: true},
      { name: 'egg groups', value: data.egg_groups , inline: true},
      { name: 'hp', value: data.stats.hp , inline: true},
      { name: 'attack', value: data.stats.attack , inline: true},
      { name: 'defense', value: data.stats.defense , inline: true},
      { name: 'special attack', value: data.stats.sp_atk , inline: true},
      { name: 'special defense', value: data.stats.sp_def , inline: true},
      { name: 'speed', value: data.stats.speed , inline: true},
      { name: 'total', value: data.stats.total , inline: true},
      { name: 'Family', value: family , inline: true},
      { name: 'generation', value: data.generation , inline: true},
    )
        .setColor(`#b22222`)
       .setThumbnail(data.sprites.animated)
       .setDescription(data.description)
    message.channel.send(embed)
    console.log(data.stats)
}
module.exports.config = {
    command: "dex",
    aliases: ['pokedex']
}