let {Developers} = require('../Config Files/config.json');
const beautify = require('beautify');
module.exports.run = async (client, message, args, Discord) => {
  if(!Developers.includes(message.author.id)) return message.channel.send(`you are not a developer`)
     if(!args[0]) return message.channel.send(`You need to provide something :/`);
     if(args.join(" ").toLowerCase().includes('token')){
         message.channel.send(`You trying to get my token? nice try go and take it from code XD.`);
         return;
     }

     try{
         const toEval = args.join(" ");
         const evaluated = eval(toEval);
         
         let embed = new Discord.MessageEmbed()
         .setColor(`#b22222`)
         .setTimestamp()
         .setTitle("Evaluate")
         .addField(`Evaluvate:`, `\`\`\`js\n${beautify(args.join(" "), {format: "js"})}\n\`\`\``, true)
         .addField("Evaluated:", evaluated, true)
         .addField("Type of:", typeof(evaluated), true);

         message.channel.send(embed)
     }catch(e){
         let errorembed = new Discord.MessageEmbed()
         .setColor(0xFF0000)
         .setTitle("Error :(")
         .setDescription(e)
         .setTimestamp()

         message.channel.send(errorembed);
     }
}
module.exports.config = {
    command: "eval",
    aliases: ['evaluate']
}