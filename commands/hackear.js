const ms = require("parse-ms");
const Discord = require("discord.js")

function getRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}


    module.exports = {
        name: 'hackear',
        category: "Economia",

        async execute(client, message, args) {

            let author = await client.db.get(`hackear/${message.guild.id}/${message.author.id}`)

    let timeout = 30 * 60000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`Você já fez um hack recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {

      let ref = client.db.get(`vin/${message.guild.id}/${message.author.id}/computador`)
      

      if (ref < 1) return message.reply(`Você precisa ter um \`Computador\` para hackear. Utilize %buy computador para comprar um computador.`)
          
      if (ref == 0) return message.reply(`Você precisa ter um \`Computador\` para hackear. Utilize %buy computador para comprar um computador.`)
          
      let pagamentoToString = getRandom(2500, 5500);
      let perdaString = getRandom(1000, 2500)
      let random = getRandom(1,8)


      let frases = {
        1: `:computer: | Você hackeou a conta de um pro-player e vendeu os itens dele, você faturou **R$${pagamentoToString}**.`,
        2: `:computer: | Você hackeou um a sede de um banco federal e ganhou **R$${pagamentoToString}** com a invasão.`,
        3: `:computer: | Você invadiu o computador do presidente e encontrou a conta secreta dele nas ilhas cayman, você transferiu **R$${pagamentoToString}** para sua conta.`,
        4: `:computer: | Você invadiu o computador de um dos chefes do narcotráfico na América Latina, e interceptou **R$${pagamentoToString}** para sua conta.`,
        5: `:computer: | Você hackeou o computador de um dos plagiadores do Dicky e conseguiu **R$${pagamentoToString}** para sua conta.`,
        // perda
        6: `:computer: | Invadiram sua casa enquanto você tentava hackear um membro importante do governo, você perdeu **seu computador** e **R$${perdaString}** :computer:.`,
        7: `:computer: | A polícia federal invadiu sua casa enquanto você hackeava a sede de um banco, você perdeu **seu computador** e **R$${perdaString}** :computer:.`,
        8: `:computer: | Alguns garotos pularam o muro da sua casa enquanto você ia na padaria tomar um café e levaram **seu computador** e **R$${perdaString}** :computer:.`    
      }

      if([6,7,8].includes(random)){
        ref = 0
        client.db.sub(`bank/${message.guild.id}/${message.author.id}`, perdaString) 
        client.db.set(`hackear/${message.guild.id}/${message.author.id}`, Date.now());
        let embed1 = new Discord.MessageEmbed()
        .setDescription(frases[random])
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("#caaa00")
        return message.reply({embeds: [embed1]})
      } else {

        client.db.add(`money/${message.guild.id}/${message.author.id}`, pagamentoToString)
        client.db.set(`hackear/${message.guild.id}/${message.author.id}`, Date.now());
        let embed = new Discord.MessageEmbed()
        .setDescription(frases[random])
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("#caaa00")
        return message.reply({embeds: [embed]})
        }
      }
    }
  }
