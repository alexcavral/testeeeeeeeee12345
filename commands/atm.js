const Discord = require('discord.js');

module.exports = {
  name: 'atm',
  aliases: ['bal', 'coins', 'carteira', 'saldo'],
  category: "Economia",

  async execute(client, message, args) {

      let user = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author;

    let money = client.db.get(`money/${message.guild.id}/${user.id}`)
    if(money === null) money = 0;
  
    let bank = client.db.get(`bank/${message.guild.id}/${user.id}`)
    if(bank === null) bank = 0;
    
    let diamantes = client.db.get(`diamantesm/${user.id}`)
    if(diamantes === null) diamantes = 0;

    const embed = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setTitle("Saldo na Carteira")
    .setDescription(`**${user.username}**, veja as informações da sua carteira:` +
    `\n\nDinheiro: **R$${money}**` +
    `\nBanco: **R$${bank}**` +
    `\nDiamantes: **${diamantes}**`)
    .setFooter("Informações da sua carteira!")
    .setTimestamp();

    message.reply({embeds: [embed]});
} 
}