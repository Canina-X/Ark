module.exports.run = async (client, message, args, Discord) => {
    try{
    message.delete();

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`You do not have MANAGE_ROLES permission`).then(m => m.delete({ timeout: 5000 }));

    if (!args[0] || !args[1]) return message.channel.send("Incorrect usage, It's `<username or user id> <role name or id>").then(m => m.delete({ timeout: 5000 }))

    try {

         const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
         const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

         const alreadyHasRole = member._roles.includes(roleName.id);

         if (alreadyHasRole) return message.channel.send('User already has that role').then(m => m.delete({ timeout: 5000 }));
                  if (roleName.position >= message.member.roles.highest.position){
            return message.channel.send("Please provide a role lower than your role");
         }
         if (member.roles.highest.position >= message.member.roles.highest.position)
         {
           return message.channel.send(`You can't give role to **${member.user}** because he is higher than you`);
         }
         if (member.roles.highest.position >= message.guild.member(client.user).roles.highest.position)
         {
           return message.channel.send(`I can't give role to **${member.user}** because my role is placed lower then his role`);
         }

         const embed = new Discord.MessageEmbed()
             .setTitle(`Role Name: ${roleName.name}`)
             .setDescription(`${message.author} has successfully given the role ${roleName} to ${member.user}`)
             .setColor(`#b22222`)
             .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
             .setFooter(new Date().toLocaleString())

        return member.roles.add(roleName).then(() => message.channel.send(embed));
    } catch (e) {
        return message.channel.send('Try to give a role that exists next time...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
    }
    
}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "giverole",
    aliases: ['rolegive']
}