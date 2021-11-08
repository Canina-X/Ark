module.exports.run = async (client, message, args, Discord) => {
    try{
    if(!args[0]) {
        return message.channel.send('Please enter a suggestion');
    }
    
  let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let botsuggest = await db.fetch(`botsuggest_${user.id}`);

  if (botsuggest !== null && timeout - (Date.now() - botsuggest) > 0) {
    let time = ms(timeout - (Date.now() - botsuggest));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:negative_squared_cross_mark:762636468870971412> You've already suggested recently\n\nsuggest again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
     const readyembed = new Discord.MessageEmbed()
    .setTitle(args.join(" "))
    .setColor(`#b22222`)
    .setFooter(`Suggested By: ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp();  
    client.channels.cache.get('764375484028551178').send(readyembed);
     client.channels.cache.get('764375484028551178').send('<@&734099599777595424>,<@&736887822165999696>');
    const newembed = new Discord.MessageEmbed()
    .setTitle('suggestion sucessfully sent')
    message.channel.send(newembed);
  }
    }catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
    }

}


module.exports.config = {
    command: "botsuggest",
    aliases: []
}