module.exports.run = async (client, message, args, Discord) => {
    
    if(!args[0]){
        
        message.channel.send(`mention a user to kiss duh`)
        
    }
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase());
    
    let avatar = "nothing";
    let number = Math.floor(Math.random() * 6);
    
    try{  if (number == 0) {
        avatar = `https://media.tenor.com/images/02b3ad0fb1d6aa77daeee0ace21d5774/tenor.gif`
    }
    if (number == 1) {
        avatar = `https://media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif`
    }
    if (number == 2) {
        avatar = `https://media.tenor.com/images/556f881d184f4dbfc4f99ae720273457/tenor.gif`
    }
    if (number == 3) {
       avatar = `https://media.tenor.com/images/783e32609c13b3204c9e33efc15004b0/tenor.gif`
    }
    if (number == 4) {
       avatar = `https://media.tenor.com/images/0b9f4ffff2a62b5222c1de0f2ff9a338/tenor.gif`
    }
    if (number == 5) {
        avatar = `https://media.tenor.com/images/d0365e64d1d2872ff4efa1c03c110afb/tenor.gif`
    }
    if (number == 6) {
        avatar = `https://media.tenor.com/images/23ce2e25f46e8e4c580e1a777c57fb36/tenor.gif`
    }}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured in 8ball.js Err: ${err}`)
    return;
}
    
    const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Kisses ${member.user.username}`)
        .setColor(`#b22222`)
        .setImage(avatar)

     message.channel.send(embed) 
 
}
module.exports.config = {
    command: "kiss",
    aliases: ['love']
}


//