const Discord = require('discord.js');
const Canvas = require('canvas')
const db = require('quick.db')
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const {token, default_prefix} = require('./Config Files/config.json');
client.commands = new Discord.Collection();
const fs = require('fs');
fs.readdir('./commands/' , (err, files) =>{
    if(err) console.log(err)

    var jsfiles = files.filter(f => f.split(".").pop() === 'js');
    if(jsfiles.length <= 0) {return console.log('No commands found in command handler')}
    else{ console.log(jsfiles.length + ' commands found in command folder')}

    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`${f} | loaded ✅`);
        client.commands.set(cmds.config.command, cmds);
    })
})
client.on('ready', () => {
    setInterval(() => {
        let statuses = [
            `with ${client.users.cache.size} users`,
            `with ${client.guilds.cache.size} servers`,
            `,help`,
            `Serving ${client.channels.cache.size} channels.`
        ]
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"})
    }, 10000);
    console.log(`Ark is now online in ${client.guilds.cache.size} servers!`)
});
 client.on('guildMemberAdd', async member => {
     try{
        const dbstuff = db.fetch(`welcome_${member.guild.id}`);
        let msg = dbstuff.message;
        let channel = await member.guild.channels.cache.find(ch => ch.id === dbstuff.channel)
        if(!channel) return;
        Canvas.registerFont('./LUCON.TTF', {family: 'Lucida Console'})
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const guild = member.guild;
        const member_count = guild.memberCount;   
        const background = await Canvas.loadImage('./image_2.jpg')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  
        ctx.font = '30px Lucida Console';
        ctx.fillStyle = '#b22222';
        ctx.fillText(`#${member_count}`, 330, 210); 
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', dynamic: true, size: 2048}));
        ctx.drawImage(avatar, 273, 27, 153, 146);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
     let new_message = msg.replace("{member}", member);
     if(msg === "") new_message = `Welcome ${member} to this server!`
        
        channel.send(new_message, attachment);
     }catch(err){
         

         
     }
    });

client.on('message', async message => {
    
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
    
    if(!message.guild) return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    var command = client.commands.get(cmd)
    
    if( !command ) {
        for (var value of client.commands.values()) {
            try {
                value.config.aliases.forEach( alias => { if(alias == cmd) command = value } )
            } catch(err){
                console.log(value, err)
            }
        }
    }

   if (command) command.run(client, message, args, Discord)
});

client.login(token)