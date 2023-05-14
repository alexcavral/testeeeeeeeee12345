const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    aliases: ['ajuda', 'commands', 'comandos'],
    category: "Bot",

    async execute (client, message, args) {

      const ecocmds = client.commands.filter(x => x.category == "Economia").map(d => "`" + d.name + "`").join(", ");
      const configcmds = client.commands.filter(x => x.category == "Config").map(d => "`" + d.name + "`").join(", ");
      const botcmds = client.commands.filter(x => x.category == "Bot").map(d => "`" + d.name + "`").join(", ");
  
  
      const convite = "https://discord.gg/jxzXQ7tUdQ"
     const add = "https://discord.com/api/oauth2/authorize?client_id=921106209707278337&permissions=8&scope=bot%20applications.commands"
  
      const embed = new Discord.MessageEmbed()
      .setTitle("Ajuda")
      .setDescription(`Está precisando de ajuda? Abaixo está todas as minhas informações, comandos, servidor de suporte e Etc.\n\nServidor de suporte: [Clique aqui](${convite})\nMe adicione: [Clique aqui](${add})\n\n**Lista de Comandos:**`)
      .addField(`Economia`, ecocmds)
      .addField(`Config`, configcmds)
      .addField(`Bot`, botcmds)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }))
      .setFooter(`Pedido por: ` + message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }))
      .setColor("#caaa00")
     message.reply({embeds: [embed]})
  
    }
  }