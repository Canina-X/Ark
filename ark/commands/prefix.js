const db = require('quick.db');
const  { default_prefix } = require("../Config Files/config.json")
const  { prefix } = require("../server.js")
module.exports.run = async (client, message, args, Discord) =>{ 

        
      if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix")}
        if(!args[0]) {
      message.channel.send(`give a new prefix after the prefix command to change it correct usage is (,prefix {newprefix})`)
    }
     if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
     if(args[0].length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }
     if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("prefix reset ✅")
    }
    db.set(`prefix_${message.guild.id}`, args[0])
    await message.channel.send(`Set Bot Prefix to ${args[0]} ✅"`)
}
module.exports.config = {
    command: "prefix",
    aliases: ["changeprefix","setprefix"]
}