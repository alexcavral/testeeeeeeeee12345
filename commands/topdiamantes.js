const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: 'topdiamantes',
  aliases: ['topdi', "rankdi"],
  category: "Economia",
  async execute(client, message, args) {
      
      if(!client.db.get(`diamantesm`)) return message.reply('Ninguem no rank')


    const top = client.db.leaderboard(`diamantesm`).sort((a, b) => b.values - a.values).slice(0, 10).map((a, i) => `**${(i + 1) + 0 * 10}.** ${client.users.cache.get(a.id)} | Diamantes: ${a.values}\n`) .join('\n')


  let Embed = new Discord.MessageEmbed()
        .setColor("#caaa00")
 .setTitle(`Rank de Diamantes`, top)
 .setDescription(`${top}`)

        message.reply({embeds: [Embed]});
}
}