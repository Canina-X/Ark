const {Developers} = require('../Config Files/config.json');
module.exports.run = async (client, message, args, Discord) => {
  //wait a sec

    if (!Developers.includes(message.author.id)) {
        return message.channel.send(`You cannot use this command!`)
    }
    if(!args[0]) {
        return message.channel.send('Please enter a update');
    }
     const readyembed = new Discord.MessageEmbed()
    .setTitle(args.join(" "))
    .setColor(`#b22222`)
    .setFooter('ARK Updates', client.user.displayAvatarURL())
    .setTimestamp();  
    client.channels.cache.get('735518043924463718').send(readyembed);
    client.channels.cache.get('735518043924463718').send('<@&757092389381996704> not reciving updates? go to <#735665431662166096> and claim you update ping');
    
    const newembed = new Discord.MessageEmbed()
    .setTitle('update sucessfully sent')
    message.channel.send(newembed);
}

module.exports.config = {
    command: "update",
    aliases: []
}