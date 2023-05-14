const Discord = require('discord.js');
const color = "#caaa00";
cor = color

module.exports = {
    name: "empregos",
	aliases: ["trabalhos", "emprego"],//aliases aqui
    category: "Economia",//categoria
    async execute(client, message, args) {
      let db = client.db
      
const interaction2 = message
  let user1 = message.author
  let user = `\`${user1.tag}\``
     
const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js")
      
if(!args[0] || !["sair", "leave", "s", "l"].includes(args[0])) {
    var emprego = await db.get(`emprego/${message.guild.id}/${user1.id}`)
    if(emprego) return message.channel.send(`Para sair do emprego atual use \`${client.db.get(`${message.guild.id}.prefix`) || "%"}emprego sair\``)
             
               if (emprego === "Programador") return message.reply(`**${user1.username}**, atualmente você já é um Programador`)
               if (emprego === "Bombeiro") return message.reply(`**${user1.username}**, Atualmente você já é um Bombeiro`)
               if (emprego === 'Policial') return message.reply(`**${user1.username}**, Atualmente você já é um Policial`)
               if (emprego === 'Delegado') return message.reply(`**${user1.username}**, Atualmente você já é um Delegado`)
  if (emprego === 'Designer') return message.reply(`**${user1.username}**, Atualmente você já é um Designer`)
  if (emprego === "Minerador") return message.reply(`**${user1.username}**, atualmente você já é um Minerador`)
    
               //--------------------EMBEDS------------------------
           
               const embed = new MessageEmbed()
               .setDescription(`${user} Bem vindo(a) à **Agência de Empregos**
Programador - \`$100\`\nMinerador - \`$300\`\nBombeiro - \`$3,400\`\n\Policial - \`$5,000\`\nDelegado - \`$6,200\``)
               .setColor(cor)
              
           
               const Programador1 = new MessageEmbed()
               .setDescription(`Você aderiu a profissão de **Programador**`)
               .setColor(cor)
           
               const Minerador2 = new MessageEmbed()
               .setDescription(`Você aderiu a profissão de **Minerador**.`)
               .setColor(cor)
           
               const Construtor3 = new MessageEmbed()
               .setDescription(`Você aderiu a profissão de **Bombeiro**`)
               .setColor(cor)
           
               const Designer4 = new MessageEmbed()
               .setDescription(`Você aderiu a profissão de **Designer**`)
               .setColor(cor)
           
               const Machado5 = new MessageEmbed()
               .setDescription(`Você aderiu a profissão de **Policial**`)
               .setColor(cor)
  
  const Delegado6 = new MessageEmbed()
               .setDescription(`Você aderiu a profissão de **Delegado**`)
               .setColor(cor)
           
               //--------------------EMBEDS------------------------
           
               //--------------------Buttons------------------------
           
               let button1 = new MessageButton()
                 .setLabel(`Programador(a)`)
               .setCustomId(`Programador`)
               .setStyle("SECONDARY");
           
               let button2 = new MessageButton()
                 .setLabel(`Minerador(a)`)
               .setCustomId(`Minerador`)
               .setStyle("SECONDARY");
  
               let button3 = new MessageButton()
                 .setLabel(`Bombeiro`)
               .setCustomId(`Bombeiro`)
               .setStyle("SECONDARY");
           
               let button4 = new MessageButton()
                .setLabel(`Designer`)
               .setCustomId(`Designer`)
               .setStyle("SECONDARY");
           
               let button5 = new MessageButton()
                .setLabel(`Policial`)
               .setCustomId(`Policial`)
               .setStyle("SECONDARY");
  
  let button6 = new MessageButton()
                .setLabel(`Delegado`)
               .setCustomId(`Delegado`)
               .setStyle("SECONDARY");
           
           
               let row = new MessageActionRow()
               .addComponents(button1, button2, button3, button5, button6);             
           
               //--------------------Buttons------------------------
           
              // interaction.reply("ㅤ")
               const MESSAGE = await message.reply({embeds: [embed], components: [row]});
           
              const filter = (interaction) => interaction.user.id === message.author.id
               const collector = MESSAGE.createMessageComponentCollector({ filter: filter, time : 120000 });
           
               collector.on('collect', async (collected) => {
let b = collected
                 if(![collected.user.id].includes(message.author.id)) return collected.reply({ content: `**${b.user.tag}**, apenas **${message.author.tag}** pode interagir com esses butões, use esse comando para poder usar os botões.`, ephemeral: true });
           
                   if(b.customId == "Programador") {
           
                     MESSAGE.edit({embeds: [Programador1], components: [], ephemeral: true});
                     db.set(`emprego/${message.guild.id}/${user1.id}`, `Programador`)
                    
                     await b.deferUpdate();
                   }
           
                   if (b.customId == "Minerador") {
                     MESSAGE.edit({embeds: [Minerador2], components: [],  ephemeral: true });
                     db.set(`emprego/${message.guild.id}/${user1.id}`, `Minerador`)

                     await b.deferUpdate();
                   }
           
                   if (b.customId == "Bombeiro") {
                     MESSAGE.edit({embeds: [Construtor3], components: [], ephemeral: true});
                     db.set(`emprego/${message.guild.id}/${user1.id}`, `Bombeiro`)

                     await b.deferUpdate();
                   }
           
                   if (b.customId == "Designer") {
                     MESSAGE.edit({embeds: [Designer4], components: [], ephemeral: true});
                     db.set(`emprego/${message.guild.id}/${user1.id}`, `Designer`)

                     await b.deferUpdate();
                 }
           
                 if (b.customId == "Policial") {
                 MESSAGE.edit({embeds: [Machado5], components: [], ephemeral: true});
                   db.set(`emprego/${message.guild.id}/${user1.id}`, `Policial`)
                   
                   await b.deferUpdate();
     
                   
                  }

                 if (b.customId == "Delegado") {
                 MESSAGE.edit({embeds: [Delegado6], components: [], ephemeral: true});
                   db.set(`emprego/${message.guild.id}/${user1.id}`, `Delegado`)
                   
                   await b.deferUpdate();
     
                   
                  }
                       })
    }
    
    if(["sair", "leave", "s", "l"].includes(args[0])) {
        var emprego = await db.get(`emprego/${message.guild.id}/${user1.id}`)
message.channel.send(`Você saiu do seguinte emprego: **${emprego}**.`)
        await db.delete(`emprego/${message.guild.id}/${user1.id}`)
    }
                    
  
}}