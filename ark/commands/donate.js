module.exports.run = async (client, message, args, Discord) => {
   try{
     const embed = new Discord.MessageEmbed()
          .setThumbnail(client.user.displayAvatarURL())
          .setTitle('donate here')
          .setColor(`#b22222`)
          .addFields(
             {
                  name: "consider donating as it will let ark bot to be online 24/7",
                  value: "https://paypal.me/pools/c/8sGaopaQPe",
                  inline: true
              },
               {
                  name: "Paypal mail",
                  value: "arkbotdiscord@gmail.com",
                  inline: true
              }
          )
          .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())

    message.channel.send(embed)
   }catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "donate",
    aliases: []
}