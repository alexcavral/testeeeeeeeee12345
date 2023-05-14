const Discord = require("discord.js")
const fs = require('fs');
 
module.exports = {
  name: 'eval',
  aliases: ['e'],

  async execute(client, message, args) {
  
  if(message.author.id != "722207631112142909") return;
  let conteudo = args.join(" ")
  if(!conteudo) return message.reply('**digite o codigo**')

  let code = args.join(" ");
  
  try {
    const embed0000 = new Discord.MessageEmbed() 
    .setTitle(`**Entrada**`)
    .setColor(`#caaa00`) 
    .setDescription(`${code}`);
  
    const embed2000 = new Discord.MessageEmbed()
    .setTitle(`**saida**`) 
    .setDescription(`${eval(code)}`)
    .setColor(`#caaa00`) ;
    
    message.reply({embeds: [embed0000]});
    message.reply({embeds: [embed2000]});
    
  } catch (err) {
    const embed3000 = new Discord.MessageEmbed() 
    .setTitle(`**Entrada**`)
    .setColor(`#caaa00`) 
    .setDescription(`${code}`);
  
    const embed4000 = new Discord.MessageEmbed() 
     .setTitle(`**Error**`)
    .setColor(`#caaa00`) 
    .setDescription(`${err}`);
  
    message.reply({embeds: [embed3000]})
    message.reply({embeds: [embed4000]});
  }
}
}
