const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'crime',
  aliases: ['c'],
  category: "Economia",

  async execute(client, message, args) {

    let user = message.author;
    
    let author = await client.db.get(`crime/${message.guild.id}/${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`Você já cometeu um crime recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {

        let replies = ['um museu','um restaurante','uma loja','um supermercado','um Garçom','um Chefe','uma pessoa que passava na rua',]
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 5000) + 5000;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("Crime efetuado com sucesso!")
        .setColor("#caaa00")
        .setDescription(`${user.username} você e seus amigos roubaram **${replies[result]}** e ganhou: \n\n:dollar: Dinheiro: **R$${amount}**`)
        .setFooter("Que belo assalto!")
        .setTimestamp();

        message.reply({embeds: [embed1]});
        
        client.db.add(`money/${message.guild.id}/${user.id}`, amount);
        client.db.set(`crime/${message.guild.id}/${user.id}`, Date.now());
    };

  }
}