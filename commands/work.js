 const Discord = require("discord.js");
const ms = require('parse-ms');

module.exports = {
  name: 'work',
  aliases: ['trabalhar', 'w'],
  category: "Economia",
  async execute(client, message, args) {
    
    let user = message.author;
    
    let author = await client.db.get(`work/${message.guild.id}/${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`Você já trabalhou recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.reply({embeds: [timeEmbed]});
    } else {

        let replies = ['Cozinheiro','Atendente','Recepcionista','caixa','Garçom','Chefe','Faxineiro',
                      'Desin','entregador','bar-man','Padeiro']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 5000) + 5000;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("Trabalho efetuado com sucesso!")
        .setColor("#caaa00")
        .setDescription(`${user.username} trabalhou como **${replies[result]}** e ganhou: \n\n:dollar: Dinheiro: **R$${amount}**`)
        .setFooter("Que homem trabalhador, tenho orgulho de você!")
        .setTimestamp();

        message.reply({embeds: [embed1]});
        
        client.db.add(`money/${message.guild.id}/${user.id}`, amount);
        client.db.set(`work/${message.guild.id}/${user.id}`, Date.now());
    };
} 
}