module.exports.run = async (client, message, args, Discord) => {
    
    if(!args[0]){
        
        message.channel.send(`mention a user to kill duh`)
        
    }
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase());
    
    let avatar = "nothing";
    let number = Math.floor(Math.random() * 6);
    
    try{  if (number == 0) {
        avatar = `https://media1.tenor.com/images/bb4b7a7559c709ffa26c5301150e07e4/tenor.gif?itemid=9955653`
    }
    if (number == 1) {
        avatar = `https://media.tenor.com/images/36b1fe2b4515135880da9c1ec7a6d182/tenor.gif`
    }
    if (number == 2) {
        avatar = `https://media.tenor.com/images/fe925091fd7b9b96b6db3fdf7c4124e5/tenor.gif`
    }
    if (number == 3) {
       avatar = `https://media.tenor.com/images/f8a0b0df6657ee1cf5d0315268f24f6a/tenor.gif`
    }
    if (number == 4) {
       avatar = `https://media.tenor.com/images/da1aa865fd2f9ee2ddde9c40378a5e8f/tenor.gif`
    }
    if (number == 5) {
        avatar = `https://media.tenor.com/images/e66010d7f3341382bd4978b709003967/tenor.gif`
    }
    if (number == 6) {
        avatar = `https://media.tenor.com/images/9cf8bed5ab41f2cd81a4c710a01fec1e/tenor.gif`
    }}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured in 8ball.js Err: ${err}`)
    return;
}
    
    const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Kills ${member.user.username}`)
        .setColor(`#b22222`)
        .setImage(avatar)

     message.channel.send(embed) 
 
}
module.exports.config = {
    command: "kill",
    aliases: []
}


//