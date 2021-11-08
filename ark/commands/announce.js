module.exports.run = async (client, message, args, Discord) => {
    try{
     if (message.member.hasPermission("ADMINSTRATOR")) {
   
        const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `You did not mention / give the id of your channel!`
      );
    }
    let question = message.content
      .split(`,announce ${channel} `)
      .join("");

    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`${question}`)
      .setFooter(`created by: ${message.author.tag}`, message.author.displayAvatarURL())
      .setColor(`#b22222`);
    let msg = await client.channels.cache.get(channel.id).send(Embed);
    message.channel.send("announcement has been sent")
     }else{message.channel.send("you need admin perms to use this cmd")}
    }catch(err){
    console.log(`error in announce ${err}`)
    }
}
module.exports.config = {
    command: "announce",
    aliases: ['announcement']
}