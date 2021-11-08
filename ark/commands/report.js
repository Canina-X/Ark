module.exports.run = async (client, message, args, Discord) => {
    if(!args[0]) {
        return message.channel.send('Please enter a bug to report');
    }
    
     let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let report = await db.fetch(`report_${user.id}`);

  if (report !== null && timeout - (Date.now() - report) > 0) {
    let time = ms(timeout - (Date.now() - report));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:negative_squared_cross_mark:762636468870971412> You've already reported a bug  recently\n\nreport  again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
     const readyembed = new Discord.MessageEmbed()
    .setTitle(args.join(" "))
    .setColor(`#b22222`)
    .setFooter(`Reported By: ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp();  
    client.channels.cache.get('764375681034879006').send(readyembed);
        client.channels.cache.get('764375681034879006').send('<@&734099599777595424>,<@&736887822165999696>');
    const newembed = new Discord.MessageEmbed()
    .setTitle('bug sucessfully sent')
    message.channel.send(newembed);
    
     const qembed = new Discord.MessageEmbed()
    .setTitle("thank you for reporting a bug this bug will be looked into asap to get more updates please join the support server   https://discord.gg/AEtttnH ")
    .setColor(`#b22222`)
    .setFooter(`Reported By: ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp();  
    message.author.send(qembed)
  }
}

module.exports.config = {
    command: "report",
    aliases: ['bug','bugreport']
}