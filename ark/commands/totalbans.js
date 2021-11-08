module.exports.run = async (client, message, args, Discord) => {
    message.guild.fetchBans().then(bans => {
        if(bans.size == null){
          
          bans = 0
    let boticon = client.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
   .setDescription("Total Bans")
   .setColor("0ED4DA")
   .setThumbnail(boticon)
   .addField("Bans : ", bans, false)
    message.channel.send(botembed);
        }else{
          
          bans = bans.size
    let boticon = client.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
   .setDescription("Total Bans")
   .setColor(`#b22222`)
   .setThumbnail(boticon)
   .addField("Bans : ", bans, false)
   message.channel.send(botembed);
 
        }
     })
    

}
module.exports.config = {
    command: "totalbans",
    aliases: ['tbans']
}