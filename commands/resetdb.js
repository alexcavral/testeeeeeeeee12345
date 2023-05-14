const Discord = require('discord.js');
const color = "#caaa00";
cor = color

module.exports = {
    name: "resetdb",
	aliases: ["rdb", "db"],//aliases aqui
    category: "Config",//categoria
    async execute(client, message, args) {
      let db = client.db
      
const interaction2 = message
     
const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js")

      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(` ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };

    
               //--------------------EMBEDS------------------------
           
               const embed = new MessageEmbed()
                 .setTitle(`⚠ | Atenção`)
               .setDescription(`Essa ação é **irreversível**, todos os dados de economia do servidor serão deletados e todos irão perder tudo o que tiver salvo no Dicky!
Após realizar a confirmação deste comando, você não poderá reverter essa ação e voltar atrás. Isso irá deletar todos os perfil, dinheiro e diversas outras coisas.

*Deletar os dados do servidor (dados de economia) não irá resolver problemas que estejam acontecendo em seu servidor, caso esteja enfrentando problemas entre em meu servidor de suporte e iremos lhe ajudar.*

Você ainda tem certeza que deseja continuar?`)
               .setColor(cor)
              
           
               const Programador1 = new MessageEmbed()
               .setDescription(`Resetandos os dados, por favor aguarde...`)
               .setColor(cor)
           
               const Minerador2 = new MessageEmbed()
               .setDescription(`Ação cancelada com sucesso.`)
               .setColor(cor)

           
               let button1 = new MessageButton()
                 .setLabel(`Deletar`)
               .setCustomId(`Programador`)
               .setStyle("SUCCESS");
           
               let button2 = new MessageButton()
                 .setLabel(`Não deletar`)
               .setCustomId(`Minerador`)
               .setStyle("DANGER");
           
           
               let row = new MessageActionRow()
               .addComponents(button1, button2);             
           
              
               const MESSAGE = await message.reply({embeds: [embed], components: [row]});
           
              const filter = (interaction) => interaction.user.id === message.author.id
               const collector = MESSAGE.createMessageComponentCollector({ filter: filter, time : 120000 });
           
               collector.on('collect', async (collected) => {
let b = collected
                 if(![collected.user.id].includes(message.author.id)) return collected.reply({ content: `**${b.user.tag}**, apenas **${message.author.tag}** pode interagir com esses butões, use esse comando para poder usar os botões.`, ephemeral: true });
           
                   if(b.customId == "Programador") {
                    db.delete(`money/${message.guild.id}`)
                    db.delete(`crime/${message.guild.id}}`)
                    db.delete(`pescar/${message.guild.id}`)
                    db.delete(`work/${message.guild.id}`)
                    db.delete(`worked/${message.guild.id}`)
                    db.delete(`bank/${message.guild.id}`)
                    db.delete(`rob/${message.guild.id}`)
                    db.delete(`emprego/${message.guild.id}`)

                    db.delete(`tr/${message.guild.id}`)
                    db.delete(`inv/${message.guild.id}`)
                     MESSAGE.edit({embeds: [Programador1], components: [], ephemeral: true});
                     
                    
                     await b.deferUpdate();
                   }
           
                   if (b.customId == "Minerador") {
                     MESSAGE.edit({embeds: [Minerador2], components: [],  ephemeral: true });
                     

                     await b.deferUpdate();
                   }
           
                   
                       })
    }
    
  
  
}