const Discord = require('discord.js');

module.exports = {
    name: "loja",
    aliases: ['shop', 'l'],
    category: "Economia",

    async execute (client, message, args) {

const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('#caaa00')
  .setThumbnail(icon)
  .setTitle('Minha loja')
  .setDescription(`Bem vindo a minha loja \n\n <:comandos:877936809731063808> <a:seta2:837451646236753961> **Itens**\n\n <:pepegaMad:838007391231410186> <a:seta2:837451646236753961> **Armas**\n\n <:P_Noice:838006810396721172> <a:seta2:837451646236753961> **Carros**.\n\n<:vipcard:872923980728782869> <a:seta2:837451646236753961> **VIP**`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))

  message.reply({embeds: [comandos]}).then(msg => {
    msg.react('877936809731063808').then(r => {
      msg.react('838007391231410186').then(r => {
        msg.react('838006810396721172').then(r => {
          msg.react('872923980728782869').then(r => {

          })
        })
      })
    })

    const geralFilter = (reaction, user) => reaction.emoji.name === 'comandos' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === 'pepegaMad' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'P_Noice' && user.id === message.author.id;
    const vipFilter = (reaction, user) => reaction.emoji.name === 'vipcard' && user.id === message.author.id;

    const geral = msg.createReactionCollector({ filter: geralFilter});
      const staff = msg.createReactionCollector({ filter: staffFilter});
    const diver = msg.createReactionCollector({ filter: diverFilter});
    const vip = msg.createReactionCollector({ filter: vipFilter});


    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Itens**')
      .setThumbnail(icon)
       .addFields(
        {
        name: 'Anel',
        value: '10k'
        },
        {
        name: 'computador',
        value: '10k'
        },
        {
            name: 'console',
            value: '1k'
        },
        {
            name: 'controle',
            value: '50'
        }
      )
      .setColor('#caaa00')
      msg.edit({embeds: [embed]});
      })

    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Armas**')
      .setThumbnail(icon)
      .addFields(
        {
        name: 'ak-47',
        value: '5k'
        },
        {
        name: 'ak-45',
        value: '10k'
        }
      )
      .setColor('#caaa00')
      msg.edit({embeds: [embed]});
    })

    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Carros**')
      .setThumbnail(icon)
      .addFields(
        {
          name: 'mercedes',
          value: '50k'
        },
        {
        name: 'audi',
        value: '60k'
        }
      )
      .setColor('#caaa00')
      msg.edit({embeds: [embed]});
    })

    vip.on('collect', r2 => {
        const embed = new Discord.MessageEmbed()
        .setTitle('**VIP**')
        .setThumbnail(icon)
        .addFields(
          {
            name: 'VIP global',
            value: '20k'
          },
          {
          name: 'VIP local',
          value: '10k'
          }
        )
        .setColor('#caaa00')
        msg.edit({embeds: [embed]});
      })
  })
}
}