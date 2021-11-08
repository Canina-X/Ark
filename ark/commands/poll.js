module.exports.run = async (client, message, args, Discord) => {
    try{

        const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `You did not mention / give the id of your channel!`
      );
    }
    let question = message.content
      .split(`,poll ${channel} `)
      .join("");

    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`New poll!`)
      .setDescription(`${question}`)
      .setFooter(`created by: ${message.author.tag}`, message.author.displayAvatarURL())
      .setColor(`#b22222`);
    let msg = await client.channels.cache.get(channel.id).send(Embed);
    await msg.react("👍");
    await msg.react("👎");
    message.channel.send("poll has been sent")
    }catch(err){
        client.users.cache.get(`432941333682847744`).send(`A error occured  Err: ${err}`)
    }
}
module.exports.config = {
    command: "poll",
    aliases: []
}