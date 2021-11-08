const db = require('quick.db')
module.exports.run = async (client, message, args, Discord) => {
    let msg;
if(!message.member.hasPermission("MANAGE_GUILD")){
    return message.channel.send(`You do not have permissions to perform this command!`);
}
if(!args[0]) return message.channel.send(`error command not used properly heres how to use this command properly \`\`,welcomer {channel e.g #welcome} {the welcome message}\`\``);
var new_msg;
msg = args.slice(1).join(" ")
if (msg === ""){
    var new_msg = 'Welcome {member} to this server!';
}
else {
    var new_msg = msg;
}
    
let ch_id = args[0].replace(`<#`, ``).replace(`>`, ``);

let channel = await message.guild.channels.cache.find(ch => ch.id === ch_id);
if(!channel) return message.channel.send(`That is not a valid channel!`);
message.channel.send(`${channel} has been set as Welcome Channel and ${new_msg} has been saved as welcome message`);
let content = {
    channel: ch_id,
    message: msg
}
db.set(`welcome_${message.guild.id}`, content)
}
module.exports.config = {
    command: "welcomer",
    aliases: []
}