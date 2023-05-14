const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'rep',
  aliases: ['reputação', "reputacao"],
  category: "Economia",

  async execute(client, message, args) {

    let user = message.author;
    const {default: ms} = await import('parse-ms') 
    let user1 = message.mentions.users.first();

    let author = await client.db.get(`rept/${user.id}`)

    if(!user1) {
        return message.reply(`Você tem que mencionar um membro para enviar uma reputação!`);
    };

    if(user1.id == user.id){
        return message.reply(`Você não pode dar uma reputação a si mesmo!`);
    };

    let timeout = 3600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`Você já enviou uma reputação recentemente!\n\nTente novamente em **${time.hours}h ${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {

        let reps = client.db.get(`reps/${user1.id}`)
        message.reply({content: `${message.author} Você enviou uma reputação para o(a) ${user1}, agora ele/ela possui ${reps + 1} reputações.`});
        
        client.db.add(`reps/${user1.id}`, 1);
        client.db.set(`rept/${user.id}`, Date.now());

      
    };

  }
}