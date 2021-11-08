const BaseEvent = require('../utils/structures/BaseEvent');
const GuildConfigs = require('../database/schemas/GuildConfig');
module.exports = class GuildCreateEvent extends BaseEvent {
    constructor() {
        super('guildCreate');
    }
    
    
    async run (client, guild) {
      try {
          const guildConfig = await GuildConfig.create({
            guildId: guild.id,
            
        } );
        console.log("Ark has joined the server. Saved to database");
      }catch (err){
          console.log(err);
      }
    }
}