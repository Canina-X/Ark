module.exports.run = async (client, message, args, Discord) => {
    try{
    if (message.member.hasPermission("BAN_MEMBERS")) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({
                reason: "Banned by ark"
              })
              .then(() => {
                message.reply(`Successfully banned ${user.tag}`);
              })
              .catch(err => {
                message.reply("I was unable to ban the member");
                console.error(err);
              });
          }  
          if (member.roles.highest.position >= message.member.roles.highest.position)
         {
           return message.channel.send(`You can't ban **${user}** because he is higher than you`);
         }
         if (member.roles.highest.position >= message.guild.member(client.user).roles.highest.position)
         {
           return message.channel.send(`I can't ban **${user}** because my role is placed lower then his role`);
         } 
          
          else {
            message.reply("That user isn't in this guild!");
          }
        } else {
          message.reply("You didn't mention the user to ban!");
        }
      }else{
          message.reply(`You do not have permissions to do that`)
      }
    }catch(err){
        client.users.cache.get(`432941333682847744`).send(`A error occured in ban.js Err: ${err}`)
    }
}
module.exports.config = {
    command: "ban",
    aliases: []
}