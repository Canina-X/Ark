const os = require('os');
const moment = require('moment');
module.exports.run = async (client, message, args, Discord) => {
    try{
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
   let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
   
   let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
   
     const embed = new Discord.MessageEmbed()
          .setThumbnail(client.user.displayAvatarURL())
          .setTitle('Bot Stats')
          .setColor(`#b22222`)
          .addFields(
              {
                  name: '💿 Bot Version',
                  value: `v3`,
                  inline: true
              },
              {
                  name: '💿 Servers',
                  value: `Serving ${client.guilds.cache.size} servers.`,
                  inline: true
              },
              {
                  name: '💿 Channels',
                  value: `Serving ${client.channels.cache.size} channels.`,
                  inline: true
              },
              {
                  name: '💿 Server Users',
                  value: `Serving ${client.users.cache.size}`,
                  inline: true
              },
              {
                  name: '💿 Ping',
                  value: `${Math.round(client.ws.ping)}ms`,
                  inline: true
              },
              {
                  name: '💿 Join Date',
                  value: `${moment(client.user.createdAt).format('LT')} ${moment(client.user.createdAt).format('LL')} ${moment(client.user.createdAt).fromNow()}`,
                  inline: true
              },
              {
                  name: '💿 Server Info',
                  value: `Cores: ${os.cpus().length}`,
                  inline: true
              },
              {
                  name: '💿 UPTIME',
                  value: `Uptime: ${uptime}`,
                  inline: true
              },
            {
                  name: '🔑 Owner',
                  value: `Owner: ${client.users.cache.get('432941333682847744')}`,
                  inline: true
              },
            {
                  name: '🛡️ Head Of Support',
                  value: `Head of support:${client.users.cache.get('614096322508619807')}`,
                  inline: true
              },
             {
                  name: '🛡️ Join Our Support Server',
                  value: `support: https://discord.gg/arksupport`,
                  inline: true
              },
             {
                  name: "consider donating as it will let ark bot to be online 24/7",
                  value: ",donate",
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
    command: "info",
    aliases: ['botinfo']
}