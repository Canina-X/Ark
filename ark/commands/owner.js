const {Developers} = require('../Config Files/config.json');
module.exports.run = async (client, message, args, Discord) => {
  //wait a sec

    if (!Developers.includes(message.author.id)) {
        return message.channel.send(`You cannot use this command!`)
    }
    
        let owners = client.guilds.cache.map(guild => guild.owner.user.tag) 
        let guilds = client.guilds.cache.map(guild => guild.name) 
      message.channel.send(guilds);
      message.channel.send(owners)
    
}

module.exports.config = {
    command: "owners",
    aliases: []
}