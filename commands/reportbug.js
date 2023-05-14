const Discord = require("discord.js")

module.exports = {
  name: 'reportbug',
  aliases: ['reportar-bug', 'report-bug'],
  category: "Bot",

  async execute(client, message, args) {
let canal = client.channels.cache.get("938498881455546469")
let bug = args.join(' ');
if(!bug) {

  let embedd1 = new Discord.MessageEmbed()

.setDescription("Descreva o bug encontrado!")
.setColor("#caaa00")
return message.reply({embeds: [embedd1]})
}


let embed = new Discord.MessageEmbed()
.setTitle("Novo Bug reportado")
.addField("Servidor que reportou", `${message.guild.name}`)
.addField("Reportado por", `${message.author.tag}`)
.addField("Mençao", `${message.author}`)
.addField("ID de quem reportou", `${message.author.id}`)
.addField("Bug", `\`${bug}\``)
.setColor("#caaa00")
canal.send({embeds: [embed]})

let embeddd = new Discord.MessageEmbed()
.setDescription(":tickets: Seu bug foi computado e enviado para minha equipe, muito obrigada!")
.setColor("#caaa00")

message.reply({embeds: [embeddd]})

}
}
