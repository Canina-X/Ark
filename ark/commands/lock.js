module.exports.run = async (client, message, args, Discord) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`You do not have permissions to do that`);
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`I cannot edit channels please make sure i have permissions to`);
    
    const EMBED = new Discord.MessageEmbed()
    .setTitle(`Lockdown`)
    .setDescription(`you need to provide a proper argument e.g \`\`,lock {all, current, off}\`\``)
    .setColor(`#b22222`)
    .setTimestamp()
    if(!args[0]) return message.channel.send(EMBED)
    
switch(args[0].toLowerCase()){
    case "all":
    const filter = await message.guild.channels.cache.filter(ch => ch.type !== "category");
    filter.forEach((channel) => {
        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false,
            READ_MESSAGES: true
        }).catch(err => {
         return message.channel.send(`A error ouccured while editing the channels: ${err}`)   
        })

    })
    message.channel.send(`Locked all channels✅`)
    break;
    case "current":
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false,
            READ_MESSAGES: true
        }).catch(err => {
            return message.channel.send(`A error ouccured while editing ${message.channel.name}`)
        })
        message.channel.send(`Locked ${message.channel.name}✅`)
    break;
    case "off":
        const filter1 = await message.guild.channels.cache.filter(ch => ch.type !== "category");
        filter1.forEach((channel) => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            }).catch(err => {
             return message.channel.send(`A error ouccured while editing the channels: ${err}`)   
            })
        });
        message.channel.send(`Done unlocking all the channels✅`)
        break;
}
}
module.exports.config = {
    command: "lock",
    aliases: []
}