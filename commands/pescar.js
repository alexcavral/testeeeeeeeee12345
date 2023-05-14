const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'pescar',
  aliases: ['f', "pesca", "ps"],
  category: "Economia",

  async execute(client, message, args) {

    let user = message.author;
    
    let author = await client.db.get(`pescar/${message.guild.id}/${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`Você já pescou recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {

        let replies = Math.floor(Math.random() * 10) + 30;
  

        let amount = Math.floor(Math.random() * 5000) + 5000;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("Pesca efetuada com sucesso!")
        .setColor("#caaa00")
        .setDescription(`${user.username} você e seus amigos saíram para pescar e pescaram **${replies}** peixes, seus peixes foram convertidos para dinheiro e ganhou: \n\n:dollar: Dinheiro: **R$${amount}**`)
        .setFooter("Que bela pescaria!")
        .setTimestamp();

        message.reply({embeds: [embed1]});
        
        client.db.add(`money/${message.guild.id}/${user.id}`, amount);
        client.db.set(`pescar/${message.guild.id}/${user.id}`, Date.now());
    };

  }
}