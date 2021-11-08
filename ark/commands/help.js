module.exports.run = async (client, message, args, Discord) => {
    
    if(args[0] == 'command'){
        const command = client.commands.get(args[1])

        if(!command) return message.channel.send('I could not find a command with that name.')
        
        const embed = new Discord.MessageEmbed()
    
        embed.setTitle(`Command Information - ${args[1]}`)
        embed.setDescription(" ")
        //embed.addField("Description: ", command.desc)
        //embed.addField("Usage: ", serverprefix + command.name + " " + command.args)
        if(command.config.aliases.length > 0) embed.addField("Aliases: ", command.config.aliases.join(" "))
         embed.addField("Description: ", command.config.description)
        //if(command.reqPerm != "NONE") embed.addField("Required Permissions: ", command.reqPerm)
        // if(command.example.length > 0) {
        //   var examples = ""
        //   command.example.forEach(example => {
        //     examples += ( serverprefix + command.name + " " + example + ", ")
        //   })
        //   examples.substring(0, examples.length-2)
        //   embed.addField('Examples', examples)
        // }
        return message.channel.send(embed)
    }
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Help`)
    .setDescription(`Here are a bunch of help categories do \`\`,help <category>\`\`\nIf you have any questions join our discord server from [here](https://discord.gg/zJHFQd5) and make a ticket`)
    .addFields(
         {
          name: "Vote ark and show your support",
          value: ",vote",
          inline: false
        },
        {
          name: "📷 Mod 📷",
          value: "Shows a list of mod commands",
          inline: false
        },
        {
         name: "🦩 Animals 🦩",
         value: "Shows a bunch of commands related to animals!",
         inline: false
        },
        {
         name: "😝 Fun 😝",
         value: "Shows a bunch of fun commands (very fun trust me)",
         inline: false
        },
        {
            name: "⛲ Extra ⛲",
            value: `Shows a bunch of extra cmds come on why not?`,
            inline: false
        },
        {
            name: "💵 economy 💵",
            value: `ARK's Economy system`,
            inline: false
        },
        {
            name: "music",
            value: `ARK's Musical system`,
            inline: false
        },
        {
         name: "Found a bug in ark?",
         value: "do ,report {bug} to report it to the developers",
         inline: false
        },
        {
         name: "Want to suggest something to change to the bot?",
         value: "Do ,botsuggest {suggestion} to suggest it to the developers",
         inline: false
        },
        {
         name: "Join our support server here",
         value: "https://discord.gg/8S6DWcH",
         inline: false
        }
        
      
    )
    .setColor(`#b22222`)
    .setTimestamp()
   if(!args[0]) return message.channel.send(embed);
   if(!["mod", "animals", "fun", "extra","economy","music"].includes(args[0].toLowerCase())) return message.channel.send(embed);
   switch(args[0].toLowerCase()){
       case "mod":
           let modhelpembed = new Discord.MessageEmbed()
           .setTitle(`📷  Ark Mod Commands 📷`)
           .setDescription(`Here are all the mod commands
           
        \`,giverole [@user] {@role} \` **give a user a role 📷**|
         \`,giveaway {time in hours} {prize} \` **creates a giveaawy in the current channel 📷**
          \`,prefix [newprefix] \` **change the bots prefix for that server 📷**
          \`,announce [channel] {message} \` **announce smth in your server using the bot 📷**
        \`,purge {number}\` **purges a certain number of messages 📷**
            \`,nuke \` **nuke all the msgs of a channel 📷**
            \`,warn [@user] {reason} \` **warn someone 📷**
            \`,warnings [@user]  \` **search up how many warns a user has 📷**
            \`,resetwarns [@user]  \` **reset a users warns 📷**
           \`,welcomer [#channel] {message optional} \` **welcome someone to your server if message not specified there is a default msg to tag someone in your message add {member}📷**
           \`,totalbans\` **Shows the total bans of this guild 📷**
           \`,kick @user\` **kicks a user out of your discord server 📷**
           \`,purge [number]\` **bulk delete messages**
           \`,ban @user\` **ban's a user out of your discord server 📷**
           \`,info\` **shows info of the bot 📷**
           \`,serverinfo\` **shows info of the server guild 📷**
           \`,lock [on/off]\` **locks all channels or unlocks all of them 📷**
           \`,unban {userid} \` **unbans a banned user 📷**
           \`,slowmode [channel] {number} (s / m / h)\` **sets a slowmode for a channel s = seconds, m = minutes , h = hours 📷**
           \`,whois {user}\` **finds info about a user 📷** `)
           .setColor(`#b22222`)
           .setFooter(`If you have any questions make sure to join our support server and make a ticket`)
           .setTimestamp()
           message.channel.send(modhelpembed);
        break;
            case "music":
           let musicembed = new Discord.MessageEmbed()
           .setTitle(`📷  Ark Musical Commands 📷`)
           .setDescription(`Here are all the mod commands
           
   
           \`,music about\` **finds info about the bot 📷**
           \`,music ping\` **finds out music ping**
           \`,music about\` **finds info about the bot 📷**
            \`,music settings\` **finds info about the servers music settings 📷**
            \`,music lyrics [song name]\` **shows the lyrics to the currently-playing song 📷**
            \`,music play <title|URL|subcommand>\` **plays the provided song 📷**
            \`,music playlists\` **shows the available playlists 📷**
            \`,music queue [pagenumber]\` **shows the current queue📷**
            \`,music remove <position|ALL>\` **removes a song from the queue 📷**
            \`,music search <query>\` **searches Youtube for a provided query 📷**
            \`,music scsearch <query>\` **shows the song that is currently playing 📷**
            \`,music shuffle\` **shuffles songs you have added 📷**
            \`DJ\` **DJ ONLY COMMANDS BELOW 📷**
            \`,music forceremove <user>\` **removes all entries by a user from the queue 📷**
            \`,music forceskip\` **shows the song that is currently playing 📷**
            \`,music movetrack <from> <to>\` **move a track in the current queue to a different position 📷**
            \`,music pause\` **pauses the current song 📷**
            \`,music playnext <title|URL>\` **plays a single song next 📷**
            \`,music repeat [on|off]\` **re-adds music to the queue when finished📷**
            \`,music skipto <position>\` **skips to the specified song 📷**
            \`,music volume [0-150]\` **sets or shows volume 📷**
            \`,music stop\` **stops the current song and clears the queue 📷**
            \`ADMIN COMMANDS\` **ADMIN ONLY COMMANDS BELOW📷**
            \`,music setdj <rolename|NONE>\` **sets the DJ role for certain music commands 📷**
            \`,music settc <channel|NONE>\` **sets the text channel for music commands📷**
            \`,music setvc <channel|NONE>\` **sets the voice channel for playing music📷**`)
           .setColor(`#b22222`)
           .setFooter(`If you have any questions make sure to join our support server and make a ticket`)
           .setTimestamp()
           message.channel.send(musicembed);
        break;
         case "economy":
           let economyhelpembed = new Discord.MessageEmbed()
           .setTitle(`📷  Ark evonomy Commands  💵`)
           .setDescription(`Here are all the economy commands
           \`,bal\` **finds out your balance 💵** 
            \`,upvote\` **get 500 ark coins per vote 💵** 
           \`,rob {user}\` **rob a user but be sure theres a chance u can get caught 💵** 
           \`,beg\` **beg for coins 💵** 
           \`,coinflip [cash]\` **double your cash 50% chance to do it  💵** 
           \`,daily\` **redeem your daily reward 💵** 
           \`,pay {user}\` **pay someone some cash 💵** 
           \`,work\` **work for cash 💵** `)
           .setColor(`#b22222`)
           .setFooter(`If you have any questions make sure to join our support server and make a ticket`)
           .setTimestamp()
           message.channel.send(economyhelpembed);
        break;
     case "animals": 
      const animalhelpembed = new Discord.MessageEmbed()
      .setColor(`#b22222`)
      .setTitle(`🦩 Ark Animal Commands 🦩`)
      .setDescription(`Here are all the commands related to animals!
      
      \`,bird\` **Shows bird Pics 🦜**
      \`,cat\` **Shows  cat pics and facts 🐱**
      \`,dog\` **Shows  dog pics and facts 🐶**
      \`,fox\` **Shows  fox pics and facts 🦊**
      \`,koala\` **Shows  koala pics and facts 🐨**
      \`,panda\` **Shows panda pics and facts 🐼**`)
      .setColor(`#b22222`)
      .setFooter(`If you have any questions make sure to join our support server and make a ticket`)
      .setTimestamp()
      message.channel.send(animalhelpembed);
     break;
    case "fun":
    const funhelpembed = new Discord.MessageEmbed()
    .setColor(`#b22222`)
    .setTitle(`😝 Ark Fun Commands 😝`)
    .setDescription(`Here is a list of fun commands (very very fun commands >:) )
    
    \`,wink\` **winks at a user 😝**
        \`,poll [channel] {question}\` **poll out a suggestion 📷**
     \`,dex {pokemon}\` ** finds out pokemon info 😝**
    \`,anime (name)\` **gives u info of the anime 😝**
    \`,manga (name)\` **gives u info of the manga 😝**
    \`,facepalm\` **facepalm at your self duh 😝**
    \`,urban\` **a dictionary 😝**
    \`,animequote\` **motivate yourself with a animequote 😝**
    \`,invite\` **invite link for this bot 😝**
    \`,binary {text}\` **changes  text  to binary code 😝**
    \`,decode [binary]\` **changes the binary code to text 😝**
    \`,steam {game name}\` **shows a steam game info default is among us 😝**
    \`,meme\` **shows you a randomly picked meme 😝**
    \`,8ball [Question]\` **predicts a fortune for ur question 😝**
    \`,hug {user}\` **hugs a user 😝**
    \`,frustrate \` **express your frustration 😝**
    \`,kill{user}\` **kill someone out of anger 😝**
     \`,kiss{user}\` **show your affection to soemone 😝**
    \`,rps\` **starts a rock,paper,scissor game 😝**
    \`,avatar {user}\` **shows the avatar of the pinged person if not pinged shows your own avatar 😝**
     \`,joke\` **wanna laugh use this cmd and get yourself a high quality joke 😝**
    \`,whois {user}\` **finds info about a user 😝**`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`If you have any questions make sure to join our discord server and make a ticket`);
    message.channel.send(funhelpembed);
    break;
  case "extra":
      const extrahelpembed = new Discord.MessageEmbed()
      .setColor(`#b22222`)
      .setTitle(`⛲Ark Extra Commands ⛲`)
      .setDescription(`Here is a list of extra commands
      
      \`,weather [city]\` **Shows weather info of a city ⛲**
      \`,corona\` **Shows the days corona status ⛲**
      \`,binary {text}\` **changes  text  to binary code ⛲**
      \`,decode [binary]\` **changes the binary code to text ⛲**
      \`,steam {game name}\` **shows a steam game info default is among us ⛲**
      \`,avatar {user}\` **shows the avatar of the pinged person if not pinged shows your own avatar ⛲**
      \`,whois {user}\` **finds info about a user ⛲**`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`If you have any questions make sure to join our discord server`)
      message.channel.send(extrahelpembed);
    break;
   }
}
module.exports.config = {
    command: "help",
    aliases: []
}