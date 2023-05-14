const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'minerar',
  aliases: ['m', "mina", "mn"],
  category: "Economia",

  async execute(client, message, args) {

    let user = message.author;
    const {default: ms} = await import('parse-ms') 

    let vara = await client.db.get(`vin/${message.guild.id}/${user.id}/picareta`)
    if(!vara) return message.reply(`você não possui nenhuma picareta, digite **${client.db.get(`${message.guild}.prefix`) || "%"}buy picareta** para comprar uma picareta.`)
    
    let author = await client.db.get(`minerar/${message.guild.id}/${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`Você já minerou recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {

        let replies = 100
  

        let amount = Math.floor(Math.random() * 5000) + 5000;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("Mineração efetuada com sucesso!")
        .setColor("#caaa00")
        .setDescription(`${user.username} você e seus amigos saíram para minerar e mineraram **${replies}** minérios.\n\nUse **${client.db.get(`${message.guild}.prefix`) || "%"}vender minerios** para vender seus minérios e ganhar dinheiro!`)
        .setFooter("Que bela mineração!")
        .setTimestamp();

        message.reply({embeds: [embed1]});
        
        client.db.add(`vin/${message.guild.id}/${user.id}/minerios`, 100);
        client.db.set(`minerar/${message.guild.id}/${user.id}`, Date.now());

      
    };

  }
}