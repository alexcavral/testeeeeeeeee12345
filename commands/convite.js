const Discord = require('discord.js');

module.exports = {
  name: 'convite',
  aliases: ['invite', 'invitar', 'add', 'add-bot', 'addbot'],
  category: "Bot",


  async execute(client, message, args) {

const help = new Discord.MessageEmbed()
.setTitle(`Olá ${message.author.username}`)
.setColor("#caaa00")
.setDescription("Aqui está o link para me convidares para o seu servidor! [Clique aqui](https://discord.com/oauth2/authorize?client_id=921106209707278337&permissions=8&scope=bot)")
.setFooter(`${message.guild.name}`)
.setTimestamp()

message.reply({embeds: [help]})
}  
}