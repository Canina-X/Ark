module.exports.run = async (client, message, args, Discord) => {

      let inviteembed = new Discord.MessageEmbed()
            .setColor(`#b22222`)
            .setTitle(`Vote  |  🔗
▬▬▬▬▬▬▬▬▬▬`)
            .setDescription("UPVOTE ARK today!!!")
            .addFields(
                        {name: "**▬▬▬▬▬▬▬▬▬▬**",
                        value: "Click [here](https://discordbotlist.com/bots/ark/upvote) to vote in DiscordBotList.com"},
                        {name: "**▬▬▬▬▬▬▬▬▬▬**",
                        value: "Click [here](https://discord.boats/bot/733032706107113543/vote) to vote in DiscordBoat"},
                         {name: "**▬▬▬▬▬▬▬▬▬▬**",
                        value: "Click [here](https://top.gg/bot/733032706107113543) to vote in TOP.GG"},
                         {name: "**▬▬▬▬▬▬▬▬▬▬**",
                        value: "Click [here](https://bots.discordlabs.org/bot/733032706107113543) to vote in DiscordLabs"},
                        {name: "**▬▬▬▬▬▬▬▬▬▬**",
                        value: "Click [here](https://botrix.cc/vote/733032706107113543) to vote in Botrix"}
                        
                        )
            .setFooter("ARK", "https://discordapp.com/channels/747654222207516672/747703010322284685/748406743716986892")
            .setTimestamp()
            message.channel.send(inviteembed);

}
module.exports.config = {
    command: "vote",
    aliases: ['upvote']
}
//https://bots.discordlabs.org/bot/733032706107113543