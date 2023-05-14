module.exports = {
  name: 'transações',
  aliases: ['transacoes', 'tr'],
  category: "Economia",

  async execute(client, message, args) {
      
  const db = client.db
    const Discord = require('discord.js');
    const { MessageSelectMenu, MessageActionRow } = require("discord.js")
 
      
var moment = client.moment    

const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

var tr = db.get(`tr/${message.guild.id}/${user.id}`)
        var tr1 = '';
        var tr2 = '';
        var tr3 = '';
       var tr4 = '';

if(!tr || tr.length <= 0) { tr1 = 'Sem Transações'
    } else {
      tr1 = tr.slice(0, 10).join('\n :money_with_wings:')
    }

if(!tr || tr.length < 11) { tr2 = 'Sem Transações'
} else {
tr2 = tr.slice(11, 21).join('\n :money_with_wings:')
}
if(!tr || tr.length < 21) { tr3 = 'Sem Transações'
} else {
  tr3 = tr.slice(21, 30).join('\n :money_with_wings:')
}
if(!tr || tr.length < 31) {
   tr4 = 'Sem Transações'
} else {
  tr4 = tr.slice(31, 40).join('\n :money_with_wings:')
}

       

let i0 = 0;
      let i1 = 10;
      let page = 1;

const row = new MessageActionRow().addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('💰 Lista de Transações')
					.addOptions([
						{
label: 'Transações Página 1',
							description: 'Transações página 1',
							value: '1',
							emoji:'<:um:886360631672967168>',
            },
            {
							label: 'Transações Página 2',
							description: 'Transações página 2',
							value: '2',
							emoji: '<:dois:886361168908779530>',
						},
            {
							label: 'Transações Página 3',
							description: 'Transações página 3',
							value: '3',
							emoji: '<:tres:886361168912990248>',
						},
            {
              label: 'Transações Página 4',
							description: 'Transações página 4',
							value: '4',
							emoji:'<:quatro:886361169005260830>',
						},
            {
 label: 'início',
							description: 'Volte para a página inicial',
							value: '5',
							emoji:'↩️',
            },
          ]),
			);

const embed = new Discord.MessageEmbed()
.setTitle(`**Lista de Transações de ${user.tag}**`)
.setDescription(` Estas são as transações de **${user.tag}**, abaixo poderá escolher a categoria de **1 a 4**`)
.setColor("#caaa00")

message.channel.send({ embeds: [embed], components: [row]

                     }).then(async msg => {

const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });

      coletor.on('collect', async(collected) => {

let valor = collected.values[0];
let menu = valor;
let ticket = menu;

            collected.deferUpdate()

if(valor === '1') {
msg.edit({ embeds: [{
 color: "#caaa00",
  title: `**Últimas transações de ${user.tag}**`,
 description: `Página 1/4
 
:money_with_wings: ${tr1}`
      }]
       })
}


if(valor === '2') {
  msg.edit({ embeds: [{
 color: "#caaa00",
  title: `**Últimas transações de ${user.tag}**`,
 description: `Página 2/4
 
:money_with_wings: ${tr2}`
      }]
       })
}

 if(valor === '3') {
  msg.edit({ embeds: [{
 color: "#caaa00",
  title: `**Últimas transações de ${user.tag}**`,
 description: `Página 3/4
 
 :money_with_wings: ${tr3}`
      }]
       })
}
 
 if(valor === '4') {
  msg.edit({ embeds: [{
 color: "#caaa00",
  title: `**Últimas transações de ${user.tag}**`,
 description: `Página 4/4
 
:money_with_wings: ${tr4}`
      }]
       })
}
 
 if(valor === '5') {
   msg.edit({ embeds: [embed] })
      }

      })
})
  }
}
