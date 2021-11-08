module.exports.run = async (client, message, args, Discord) => {
    try{
    const user =  message.mentions.users.first() || message.author ;
    const avatar = user.displayAvatarURL({dynamic: true, size: 2048});
   // return message.channel.send(user.displayAvatarURL({size: 4096, dynamic: true}))
   
    const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar `)
        .setColor(`#b22222`)
        .setImage(avatar)

     message.channel.send(embed) 
    }catch(err){
        client.users.cache.get(`432941333682847744`).send(`A error occured in avatar.js Err: ${err}`)
    }
}
module.exports.config = {
    command: "avatar",
    aliases: ['pfp','profilepicture']
}