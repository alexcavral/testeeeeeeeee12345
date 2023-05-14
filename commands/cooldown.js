const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'cooldown',
  aliases: ['cd', "t"],
  category: "Economia",

  async execute(client, message, args) {

    let user = message.author;


    let author = await client.db.get(`worked/${message.guild.id}/${user.id}`);
    let author2 = await client.db.get(`work/${message.guild.id}/${user.id}`)
    let author3 = await client.db.get(`rob/${message.guild.id}/${user.id}`);
    let author4 = await client.db.get(`crime/${message.guild.id}/${user.id}`);
    let author5 = await client.db.get(`pescar/${message.guild.id}/${user.id}`);


        let timeout = 86400000;
    let timeout2 = 600000;


            let time = ms(timeout - (Date.now() - author));
        let time2 = ms(timeout2 - (Date.now() - author2));
      let time3 = ms(timeout - (Date.now() - author3));
      let time4 = ms(timeout2 - (Date.now() - author4));
      let time5 = ms(timeout2 - (Date.now() - author5));




 const daily = time.seconds > 0 ? `**${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`: `Já pode usar`

 const trabalho = time2.seconds > 0 ? `**${time2.minutes} minutos, e ${time2.seconds} segundos.**`: `Já pode usar`

 const roubar = time3.seconds > 0 ? `**${time3.minutes} minutos, e ${time3.seconds} segundos.**`: `Já pode usar`

 const crime = time4.seconds > 0 ? `**${time4.minutes} minutos, e ${time4.seconds} segundos.**`: `Já pode usar`

const pesca = time5.seconds > 0 ? `**${time5.minutes} minutos, e ${time5.seconds} segundos.**`: `Já pode usar`



        let embed = new Discord.MessageEmbed()
        .setTitle(`<:cooldown:938505447290335263> Tempos`)
        .setDescription(`${message.author.tag} Cooldown's`)
        .addField("<:temporizador:857726828243714098> Tempo Para o Próximo Daily", daily)
        .addField("<:temporizador:857726828243714098> Tempo Para o Próximo trabalho", trabalho)
        .addField("<:temporizador:857726828243714098> Tempo Para o Próximo crime", crime)
        .addField("<:temporizador:857726828243714098> Tempo Para a Próxima pesca", pesca)
        .addField("<:temporizador:857726828243714098> Tempo Para o Próximo roubo", roubar)
        .setColor("#caaa00")
        
        message.reply({embeds: [embed]})
}
}