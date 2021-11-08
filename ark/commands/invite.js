module.exports.run = async (client, message, args, Discord) => {

      let inviteembed = new Discord.MessageEmbed()
            .setColor(`#b22222`)
            .setTitle(`Invite Command  |  🔗
▬▬▬▬▬▬▬▬▬▬`)
            .setDescription("Moderate your server with ARK today!!!")
            .addFields({name: "**▬▬▬▬▬▬▬▬▬▬**",
                        value: "Click [here](https://discord.com/api/oauth2/authorize?client_id=733032706107113543&permissions=8&scope=bot) to invite me and get started!"})
            .setFooter("ARK", "https://discordapp.com/channels/747654222207516672/747703010322284685/748406743716986892")
            .setTimestamp()
            message.channel.send(inviteembed);

}
module.exports.config = {
    command: "invite",
    aliases: ['botinvite']
}