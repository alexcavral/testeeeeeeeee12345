const Discord = require('discord.js');

module.exports = {
  name: 'votar',
  aliases: ['vote', 'votebot', "v"],
  category: "Bot",
  async execute(client, message, args) {

const help = new Discord.MessageEmbed()
.setTitle(`Olá ${message.author.username}!`)
.setColor("#caaa00")
.setDescription("Aqui está o link para votar em mim! Clique [aqui](https://top.gg/bot/921106209707278337).")
.setFooter(`${message.guild.name}`)
.setTimestamp()

message.reply({embeds: [help]})
}  
}
