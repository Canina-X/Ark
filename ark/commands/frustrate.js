module.exports.run = async (client, message, args, Discord) => {
    try{
 
    let avatar = "nothing";
    let number = Math.floor(Math.random() * 6);
    
    try{  if (number == 0) {
        avatar = `https://media.tenor.com/images/58609db90ae16691804a6f39098a301f/tenor.gif`
    }
    if (number == 1) {
        avatar = `https://media.tenor.com/images/ccea63eba50fe4de2f307346c321de87/tenor.gif`
    }
    if (number == 2) {
        avatar = `https://media.tenor.com/images/082392dcd5d76b3c853ed32d22553371/tenor.gif`
    }
    if (number == 3) {
       avatar = `https://media.tenor.com/images/0bff71cb364ccec2e4eb8fbd2981b69b/tenor.gif`
    }
    if (number == 4) {
       avatar = `https://media.tenor.com/images/ad7611522a20cc12c23bcc413176962a/tenor.gif`
    }
    if (number == 5) {
        avatar = `https://media.tenor.com/images/d5565fb365ea48641b8416f992f7d05c/tenor.gif`
    }
    if (number == 6) {
        avatar = `https://media.tenor.com/images/750e31ff5efd48b22316388bcf63407a/tenor.gif`
    }}catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured in 8ball.js Err: ${err}`)
    return;
}
    
    const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} is **Frustrated**`)
        .setColor(`#b22222`)
        .setImage(avatar)

     message.channel.send(embed) 
    }catch(err){
    client.users.cache.get(`432941333682847744`).send(`A error ouccured Err: ${err}`)
    return;
}
}
module.exports.config = {
    command: "frustrate",
    aliases: []
}


//