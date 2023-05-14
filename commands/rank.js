const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: 'rank',
  aliases: ['top'],
  category: "Economia",
  async execute(client, message, args) {
      
      if(!client.db.get(`bank/${message.guild.id}`)) return message.reply('Ninguem no rank')

const top = client.db.leaderboard(`bank/${message.guild.id}`).sort((a, b) => b.values - a.values).slice(0, 10).map((a, i) => `**${(i + 1) + 0 * 10}.** ${client.users.cache.get(a.id).tag} | Dinheiro: ${a.values}\n\n`) 


  let Embed = new Discord.MessageEmbed()
        .setColor("#caaa00")
 .setTitle(`Rank de dinheiro`, top)
 .setDescription(`${top}`)

        message.reply({embeds: [Embed]});
}
}