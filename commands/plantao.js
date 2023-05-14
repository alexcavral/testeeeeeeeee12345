const Discord = require('discord.js');
const color = "#caaa00";
cor = color
const config = require("../config.json"); 
const ms = require('parse-ms');

module.exports = {
    name: "farm",
	aliases: ["fm", "plantacao", "plantação", "fazenda", "plantar"],//aliases aqui
    category: "Economia",//categoria
    async execute(client, message, args) {
      let db = client.db
      
const interaction2 = message
  const user1 = message.author
  const user = message.author 
const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js")

let aff = client.db.get(`vin/${message.guild.id}/${message.author.id}/alface`)
let aff3 = client.db.get(`vin/${message.guild.id}/${message.author.id}/tomate`)
let aff4 = client.db.get(`vin/${message.guild.id}/${message.author.id}/cenoura`)
let aff5 = client.db.get(`vin/${message.guild.id}/${message.author.id}/batata`)
let aff6 = client.db.get(`vin/${message.guild.id}/${message.author.id}/vacas`)
let aff7 = client.db.get(`vin/${message.guild.id}/${message.author.id}/galinhas`)
let fl1 = client.db.get(`fazendal1/${message.guild.id}/${user1.id}`) 
let fl2 = client.db.get(`fazendal2/${message.guild.id}/${user1.id}`) 
let fl3 = client.db.get(`fazendal3/${message.guild.id}/${user1.id}`) 
let fl4 = client.db.get(`fazendal4/${message.guild.id}/${user1.id}`) 
let an1 = client.db.get(`celeiro1/${message.guild.id}/${user1.id}`)
let an2 = client.db.get(`celeiro2/${message.guild.id}/${user1.id}`)
let an3 = client.db.get(`galinheiro1/${message.guild.id}/${user1.id}`)
let an4 = client.db.get(`galinheiro2/${message.guild.id}/${user1.id}`)


//------------------------------------------------------------------------------------------

let fz = db.get(`fazendal1/${message.guild.id}/${user1.id}`)
               
               if(fz == null) fz = 0;
                

                 let fz1 = db.get(`fazendal2/${message.guild.id}/${user1.id}`)
               if(fz1 == null) fz1 = 0;

               let fz2 = db.get(`fazendal3/${message.guild.id}/${user1.id}`)
               if(fz2 == null) fz2 = 0;

               let fz3 = db.get(`fazendal4/${message.guild.id}/${user1.id}`)
               if(fz3 == null) fz3 = 0;

               let vacas = db.get(`celeiro1/${message.guild.id}/${user1.id}`)
               if(vacas == null) vacas = 0;

               let vacas1 = db.get(`celeiro2/${message.guild.id}/${user1.id}`)
               if(vacas1 == null) vacas1 = 0;

               let galinhas = db.get(`galinheiro1/${message.guild.id}/${user1.id}`)
               if(galinhas == null) galinhas = 0;

               let galinhas1 = db.get(`galinheiro2/${message.guild.id}/${user1.id}`)
               if(galinhas1 == null) galinhas1 = 0;

               let batata = db.get(`vin/${message.guild.id}/${message.author.id}/batata`)
               if(batata == null) batata = 0;

               let cenoura = db.get(`vin/${message.guild.id}/${message.author.id}/cenoura`)
               if(cenoura == null) cenoura = 0;

               let tomate = db.get(`vin/${message.guild.id}/${message.author.id}/tomate`)
               if(tomate == null) tomate = 0;

               let alface = db.get(`vin/${message.guild.id}/${message.author.id}/alface`)
               if(alface == null) alface = 0;

               let ga = db.get(`vin/${message.guild.id}/${message.author.id}/galinhas`)
               if(ga == null) ga = 0;

               let va = db.get(`vin/${message.guild.id}/${message.author.id}/vacas`)
               if(va == null) va = 0;
               

               let data = client.db.get(`${message.guild.id}.prefixo`)
let prefixo = ''

if(data == null) {
  prefixo = config.prefix
}
if(data != null) {
  prefixo = data
}
      

let timeout = 3600000;
        let author = await client.db.get(`fztempo/${message.guild.id}/${message.author.id}`);
        let timeout1 = 3600000;
        let author1 = await client.db.get(`antempo/${message.guild.id}/${message.author.id}`); 

    
               //--------------------EMBEDS------------------------
           
               const embed = new MessageEmbed()
                 .setTitle(`Farm de ${message.author.username}`)
               .setDescription(`**${message.author.username}** seja muito bem vindo(a) ao meu sistema de fazenda! 
               
               Escolha abaixo apertando no respectivo botão a área que deseja proseguir!`)
               .setColor(cor)

               const aff1 = new MessageEmbed()
                 .setTitle(`Farm de ${message.author.username}`)
               .setDescription(`Infelizmente você **não** tem **sementes** suficientes!`)
               .setColor(cor)

            
            const aff2 = new MessageEmbed()
                 .setTitle(`Farm de ${message.author.username}`)
               .setDescription(`Infelizmente você **não** tem **animais** suficientes!`)
               .setColor(cor)

               const aff23 = new MessageEmbed()
                 .setTitle(`Farm de ${message.author.username}`)
               .setDescription(`Infelizmente você **não** tem **nada** para recolher!`)
               .setColor(cor)
               

               const Programador1 = new MessageEmbed()
                .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`:farmer: Lote **1**: Sementes plantadas: ${fz}/4
               :farmer: Lote **2**: Sementes plantadas: ${fz1}/4
               :farmer: Lote **3**: Sementes plantadas: ${fz2}/4
               :farmer: Lote **4**: Sementes plantadas: ${fz3}/4`)
               .setColor(cor)

               const sucesso = new MessageEmbed()
                .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`Sucesso! Você recolheu **todas** as suas plantações de **todos** os lotes!`)
               .setColor(cor)

               const sucesso1 = new MessageEmbed()
                .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`Sucesso! Você recolheu **todos** os seus produtos dos celeiros e dos galinheiros!`)
               .setColor(cor)

               const plantara = new MessageEmbed()
                .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`Sucesso você plantou **um dos** lots!
               
                *Volte em 1 hora para recolher as suas plantações*`)
               .setColor(cor)

               const sucesso3 = new MessageEmbed()
               .setTitle(`Fazenda de ${message.author.username}`)
              .setDescription(`Sucesso você colocou **todos** os celeiros com vacas para produzir seu produto!
              
               *Volte em 1 hora para recolher os seus produtos*`)
              .setColor(cor)

              const sucesso4 = new MessageEmbed()
               .setTitle(`Fazenda de ${message.author.username}`)
              .setDescription(`Sucesso você colocou **todos** os galinheiros com galinhas para produzir seu produto!
              
               *Volte em 1 hora para recolher os seus produtos*`)
              .setColor(cor)
           
               const Minerador2 = new MessageEmbed()
               .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`:cow: Celeiro **1**: Número de vacas no celeiro: ${vacas}/10
               :cow: Celeiro **2**: Número de vacas no celeiro: ${vacas1}/10
               :chicken: Galinheiro **1**: Número de galinhas no galinheiro: ${galinhas}/20
               :chicken: Galinheiro **2**: Número de galinhas no galinheiro: ${galinhas1}/20
               
               *Utilize ${prefixo}buy para comprar animais!*`)
               .setColor(cor)

               const animais = new MessageEmbed()
               .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`Selecione abaixo qual o animal que deseja colocar na sua fazenda!
               
               **No momento você tem:**
               Vacas: ${va}/20
               Galinhas: ${ga}/40
         
               
               *Utilize ${prefixo}buy para comprar animais!*`)
               .setColor(cor)

               const plantar = new MessageEmbed()
               .setTitle(`Fazenda de ${message.author.username}`)
               .setDescription(`Selecione abaixo qual a semente que deseja plantar!
               
               **No momento você tem:**
               Sementes de Batata: ${batata}/4
               Sementes de Cenoura: ${cenoura}/4
               Sementes de Tomate: ${tomate}/4
               Sementes de Alface: ${alface}/4
               
               *Utilize ${prefixo}buy para comprar sementes!*`)
               .setColor(cor)

           
               let button1 = new MessageButton()
                 .setLabel(`Fazenda plantação`)
               .setCustomId(`Programador`)
               .setStyle("PRIMARY");
           
               let button2 = new MessageButton()
                 .setLabel(`Fazenda animais`)
               .setCustomId(`Minerador`)
               .setStyle("PRIMARY");

               let button3 = new MessageButton()
               .setLabel(`Plantar`)
             .setCustomId(`Plantar`)
             .setStyle("PRIMARY");

               let button4 = new MessageButton()
               .setLabel(`Plantar Alface`)
             .setCustomId(`Plantar a`)
             .setStyle("PRIMARY");

             let button5 = new MessageButton()
             .setLabel(`Plantar Tomate`)
           .setCustomId(`Plantar t`)
           .setStyle("PRIMARY");

           let button6 = new MessageButton()
           .setLabel(`Plantar Cenoura`)
         .setCustomId(`Plantar c`)
         .setStyle("PRIMARY");

         let button7 = new MessageButton()
         .setLabel(`Plantar Batata`)
       .setCustomId(`Plantar b`)
       .setStyle("PRIMARY");

       let button8 = new MessageButton()
         .setLabel(`Colocar animais na fazenda`)
       .setCustomId(`fa`)
       .setStyle("PRIMARY");

       let button9 = new MessageButton()
       .setLabel(`Colocar vaca`)
     .setCustomId(`vaa`)
     .setStyle("PRIMARY");

     let button10 = new MessageButton()
     .setLabel(`Colocar galinha`)
   .setCustomId(`gaa`)
   .setStyle("PRIMARY");

   let button11 = new MessageButton()
     .setLabel(`Recolher plantações`)
   .setCustomId(`rs`)
   .setStyle("PRIMARY");

   let button12 = new MessageButton()
     .setLabel(`Recolher produtos`)
   .setCustomId(`rp`)
   .setStyle("PRIMARY");

           
           
               let row = new MessageActionRow()
               .addComponents(button1, button2);       
               let row1 = new MessageActionRow()
               .addComponents(button3, button11, button2);     
               let row2 = new MessageActionRow()
               .addComponents(button8, button12, button1);    
               let row3 = new MessageActionRow()
               .addComponents(button4, button5, button6, button7)     
               let row4 = new MessageActionRow()
               .addComponents(button9, button10)         
           
              
               const MESSAGE = await message.reply({embeds: [embed], components: [row]});
           
              const filter = (interaction) => interaction.user.id === message.author.id
               const collector = MESSAGE.createMessageComponentCollector({ filter: filter, time : 120000 });
           
               collector.on('collect', async (collected) => {
let b = collected
                 if(![collected.user.id].includes(message.author.id)) return message.reply({ content: `**${b.user.tag}**, apenas **${message.author.tag}** pode interagir com esses butões, use esse comando para poder usar os botões.`, ephemeral: true });
           
                   if(b.customId == "Programador") {
                     MESSAGE.edit({embeds: [Programador1], components: [row1], ephemeral: true});
                     
                    
                     await b.deferUpdate(); 
                   }

                   if(b.customId == "Plantar") {
                    MESSAGE.edit({embeds: [plantar], components: [row3], ephemeral: true});
                    
                   
                    await b.deferUpdate();
                  }
                  if(b.customId == "Plantar a") {
                    if (aff < 4) {
                        return MESSAGE.edit({embeds: [aff1], components: [], ephemeral: true});
                    }
                    client.db.delete(`vin/${message.guild.id}/${message.author.id}/alface`, 4)
                    client.db.set(`fazendal1/${message.guild.id}/${user1.id}`, 4)
                    client.db.set(`fztempo/${message.guild.id}/${user.id}`, Date.now())
                    MESSAGE.edit({embeds: [plantara], components: [], ephemeral: true});
                    
                   
                    await b.deferUpdate();
                  }
                  if(b.customId == "Plantar t") {
                    if (aff3 < 4) {
                        return MESSAGE.edit({embeds: [aff1], components: [], ephemeral: true});
                    }
                    client.db.delete(`vin/${message.guild.id}/${message.author.id}/tomate`, 4)
                    client.db.set(`fazendal2/${message.guild.id}/${user1.id}`, 4)
                    client.db.set(`fztempo/${message.guild.id}/${user.id}`, Date.now())
                    MESSAGE.edit({embeds: [plantara], components: [], ephemeral: true});
                    
                   
                    await b.deferUpdate();
                  }
                  if(b.customId == "Plantar c") {
                    if (aff4 < 4) {
                        return MESSAGE.edit({embeds: [aff1], components: [], ephemeral: true});
                    }
                    client.db.delete(`vin/${message.guild.id}/${message.author.id}/cenoura`, 4)
                    client.db.set(`fazendal3/${message.guild.id}/${user1.id}`, 4)
                    client.db.set(`fztempo/${message.guild.id}/${user.id}`, Date.now())
                    MESSAGE.edit({embeds: [plantara], components: [], ephemeral: true});
                    
                   
                    await b.deferUpdate();
                  }
                  if(b.customId == "Plantar b") {
                    if (aff5 < 4) {
                        return MESSAGE.edit({embeds: [aff1], components: [], ephemeral: true});
                    }
                    client.db.delete(`vin/${message.guild.id}/${message.author.id}/batata`, 4)
                    client.db.set(`fazendal4/${message.guild.id}/${user1.id}`, 4)
                    client.db.set(`fztempo/${message.guild.id}/${user.id}`, Date.now())
                    MESSAGE.edit({embeds: [plantara], components: [], ephemeral: true});
                    
                   
                    await b.deferUpdate();
                  }
           
                   if (b.customId == "Minerador") {
                     MESSAGE.edit({embeds: [Minerador2], components: [row2],  ephemeral: true });
                     

                     await b.deferUpdate();
                   }

                   if (b.customId == "fa") {
                    MESSAGE.edit({embeds: [animais], components: [row4],  ephemeral: true });
                    

                    await b.deferUpdate();
                  }
                  if (b.customId == "vaa") {
                    if (aff6 < 10) {
                        return MESSAGE.edit({embeds: [aff2], components: [], ephemeral: true});
                    }
                    client.db.delete(`vin/${message.guild.id}/${message.author.id}/vacas`, 40)
                    client.db.set(`antempo/${message.guild.id}/${user.id}`, Date.now())
                    client.db.set(`celeiro1/${message.guild.id}/${user1.id}`, 10)
                    client.db.set(`celeiro2/${message.guild.id}/${user1.id}`, 10)
                       
                    MESSAGE.edit({embeds: [sucesso3], components: [],  ephemeral: true });
                    

                    await b.deferUpdate();
                  }
                  if (b.customId == "gaa") {
                    if (aff7 < 20) {
                        return MESSAGE.edit({embeds: [aff2], components: [], ephemeral: true});
                    }
                    client.db.delete(`vin/${message.guild.id}/${message.author.id}/galinhas`, 40)
                    client.db.set(`antempo/${message.guild.id}/${user.id}`, Date.now())
                    client.db.set(`galinheiro1/${message.guild.id}/${user1.id}`, 20)
                    client.db.set(`galinheiro2/${message.guild.id}/${user1.id}`, 20)
                    MESSAGE.edit({embeds: [sucesso4], components: [],  ephemeral: true });
                    

                    await b.deferUpdate();
                  }         
                  if (b.customId == "rs") {
                    if (fl1 < 4) {
                      return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
                  }
                  if (fl2 < 4) {
                    return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
                }
                if (fl3 < 4) {
                  return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
              }
              if (fl4 < 4) {
                return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
            }
                    if(author !== null && timeout - (Date.now() - author) > 0){
                      let time = ms(timeout - (Date.now() - author));
                      const rss = new MessageEmbed()
               .setTitle(`Farm de ${message.author.username}`)
             .setDescription(`Parece que suas plantações ainda **não** estão prontas para serem recolhidas, volte em **${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos** para recolher suas plantações.`)
             .setColor(cor)
                      return MESSAGE.edit({embeds: [rss], components: [],  ephemeral: true });
                      
                    }
                    client.db.sub(`fazendal4/${message.guild.id}/${user1.id}`, 4 )
                    client.db.sub(`fazendal3/${message.guild.id}/${user1.id}`,4 )
                    client.db.sub(`fazendal2/${message.guild.id}/${user1.id}`, 4)
                    client.db.sub(`fazendal1/${message.guild.id}/${user1.id}`, 4)
                    client.db.add(`vin/${message.guild.id}/${user1.id}/planta`, 16)
                    MESSAGE.edit({embeds: [sucesso], components: [],  ephemeral: true });
                    

                    await b.deferUpdate();
                  }       
                  if (b.customId == "rp") {
                    if (an1 < 4) {
                      return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
                  }
                  if (an2 < 4) {
                    return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
                }
                if (an3 < 4) {
                  return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
              }
              if (an4 < 4) {
                return MESSAGE.edit({embeds: [aff23], components: [], ephemeral: true});
            }
                    if(author1 !== null && timeout1 - (Date.now() - author1) > 0){
                      let time = ms(timeout1 - (Date.now() - author1));
                      const rss = new MessageEmbed()
               .setTitle(`Farm de ${message.author.username}`)
             .setDescription(`Parece que seus produtos ainda **não** estão prontos para serem recolhidos, volte em **${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos** para recolher seus produtos.`)
             .setColor(cor)
                      return MESSAGE.edit({embeds: [rss], components: [],  ephemeral: true });
                      
                    }
                    client.db.sub(`celeiro1/${message.guild.id}/${user1.id}`, 10)
                    client.db.sub(`celeiro2/${message.guild.id}/${user1.id}`, 10)
                    client.db.sub(`galinheiro1/${message.guild.id}/${user1.id}`, 20)
                    client.db.sub(`galinheiro2/${message.guild.id}/${user1.id}`, 20)
                    client.db.add(`vin/${message.guild.id}/${user1.id}/planta`, 16)
                    client.db.add(`vin/${message.guild.id}/${user1.id}/leite`, 20)
                    client.db.add(`vin/${message.guild.id}/${user1.id}/ovos`, 40)
                    MESSAGE.edit({embeds: [sucesso1], components: [],  ephemeral: true });
                    

                    await b.deferUpdate();
                  }     

           
                   
                       })
    }
    
  
  
}