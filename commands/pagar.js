const Discord = require('discord.js');

module.exports = {
    name: "pagar",
    aliases: ['transferir', 'pay', 'pagar'],
    category: "Economia",

    async execute (client, message, args) {

let user = message.mentions.members.first() 

    let member = client.db.get(`money/${message.guild.id}/${message.author.id}`)

    let embed1 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você tem que mencionar alguem para pagar!`);

    if (!user) {
        return message.reply({embeds: [embed1]})
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Coloque um valor válido para o pagamento!`);
  
    if (!args[1]) {
        return message.reply({embeds: [embed2]})
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você nao possui dinheiro suficiente para realizar o pagamento!`);

    if (member < args[1]) {
        return message.reply({embeds: [embed4]})
    }
    let embed5 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você nao pode enviar quantias abaixo de 0!`);

    if(args[1] < 0) {
        return message.reply({embeds: [embed5]})
    }
    let embed7 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor númerico para pagar! `);

    if (isNaN(args[1])){
        return message.reply({embeds: [embed7]})
    }
    let embed6 = new Discord.MessageEmbed()
    .setTitle(" Pagamento Efetuado!")
    .setColor("#caaa00")
    .setDescription(`Você pagou o ${user} com **${args[1]}** de Dinheiro!`);

    message.reply({embeds: [embed6]})
    client.db.add(`money/${message.guild.id}/${user.id}`, args[1])
    client.db.sub(`money/${message.guild.id}/${message.author.id}`, args[1])
}
}