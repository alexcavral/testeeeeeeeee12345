const Discord = require('discord.js');

module.exports = {
  name: 'suporte',
  aliases: ['server-suporte', 'support', 'support-server'],
  category: "Bot",

  async execute(client, message, args) {

const help = new Discord.MessageEmbed()
.setTitle(`Olá ${message.author.username}`)
.setColor("#caaa00")
.setDescription("Aqui está o link para entrar em meu servidor de suporte! https://discord.com/invite/XYMBZzPfnY")
.setFooter(`${message.guild.name}`)
.setTimestamp()

message.reply({embeds: [help]})
}  
}
