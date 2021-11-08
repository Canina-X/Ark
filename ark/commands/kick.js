module.exports.run = async (client, message, args, Discord) => {
    try{
    if (message.member.hasPermission("KICK_MEMBERS")) {
                
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick("kicked by ark")
              .then(() => {
                message.reply(`Successfully kicked ${user.tag}`);
              })
              
              .catch(err => {
                message.reply("I was unable to kick the member");
                console.error(err);
              });
          }
           if (member.roles.highest.position >= message.member.roles.highest.position)
         {
           return message.channel.send(`You can't kick **${user}** because he is higher than you`);
         }
         if (member.roles.highest.position >= message.guild.member(client.user).roles.highest.position)
         {
           return message.channel.send(`I can't kick **${user}** because my role is placed lower then his role`);
         }
          else {
            message.reply("That user isn't in this server!!!!");
          }
        } else {
          message.reply("Hmm, you didn't mention the user to kick!");
        }
      }else{
          message.reply(`You do not have permissions to do that`)
      }
    }catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "kick",
    aliases: []
}