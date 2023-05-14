const Discord = require("discord.js");
const ms = require("parse-ms");

module.exports = {
  name: 'rob',
  aliases: ['roubar'],
  category: "Economia",
  async execute(client, message, args) {
  
    let autor = message.author;
    
    let user = message.mentions.users.first();
    
    if(!user) {
        return message.reply(` ${autor} você tem que mencionar um membro para realizar seu roubo!`);
    };

    if(user.id == autor.id){
        return message.reply(` ${autor} você não pode se auto-roubar!`);
    };

    let user_money = await client.db.get(`money/${message.guild.id}/${user.id}`)
    if(user_money == null) user_money = 0;

    let autor_money = await client.db.get(`money/${message.guild.id}/${autor.id}`)
    if(autor_money == null) autor_money = 0;
        
    if(user_money <= 0) {
        return message.reply(` ${autor}, você não pode roubar alguem que não possui dinheiro!`);
    };

    let timeout = 600000;

    let daily = await client.db.get(`rob/${message.guild.id}/${autor.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {

      let time = ms(timeout - (Date.now() - daily));
  
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(` Você já realizou um roubo hoje!\n\nTente novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {
        
        let sorte = Math.floor(Math.random() * 4) + 1;
        
        if(sorte == 2) {
            
            let amount = Math.floor(Math.random() * autor_money) + 1;
            
            let moneyEmbed = new Discord.MessageEmbed()
            .setTitle("👮 Seu roubo falhou e você foi preso!")
            .setColor("#caaa00")
            .setDescription(`Você realizou um roubo e não se saiu muito bem!\nE você perdeu um total de **R$${amount}**!`);
           
            message.reply({embeds: [moneyEmbed]});
            client.db.sub(`money/${message.guild.id}/${autor.id}`, amount);
            client.db.set(`rob/${message.guild.id}/${autor.id}`, Date.now());
        }else{
            
            let amount = Math.floor(Math.random() * user_money) + 1;
            
            let moneyEmbed = new Discord.MessageEmbed()
            .setTitle("🔫 Roubo Realizado Com sucesso!")
            .setColor("#caaa00")
            .setDescription(`Você roubou o ${user}!\nE você conseguiu uma quantia de **R$${amount}**!`);
            
            message.reply({embeds: [moneyEmbed]});
            client.db.sub(`money/${message.guild.id}/${user.id}`, amount);
            client.db.add(`money/${message.guild.id}/${autor.id}`, amount);
            client.db.set(`rob/${message.guild.id}/${autor.id}`, Date.now());
        };
    };
}
}
