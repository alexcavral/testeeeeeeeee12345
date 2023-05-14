const Discord = require("discord.js");


module.exports = {
  name: 'dep',
  aliases: ['depositar', 'colocar-da-carteira', 'depositar-dinheiro'],
  category: "Economia",

  async execute(client, message, args) {
    
    let member = client.db.get(`money/${message.guild.id}/${message.author.id}`);
    if(member == null) member = 0;

    let bank = client.db.get(`bank/${message.guild.id}/${message.author.id}`);
    if(bank == null) bank = 0;

    let embed2 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Coloque o valor do deposito!`);
  
    if (!args[0]) {
        return message.reply({embeds: [embed2]});
    };
    let embed4 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você não possui Money suficiente para realizar o deposito!`);

    if (member < args[0]) {
        return message.reply({embeds: [embed4]});
    };
    let embed5 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor maior que **0** para realizar o deposito!`);

    if(args[0] < 0) {
        return message.reply({embeds: [embed5]});
    };
    let embed6 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor numerico para realizar o deposito!`);

    if (isNaN(args[0])){
        return message.reply({embeds: [embed6]});
    };
    let embed7 = new Discord.MessageEmbed()
    .setTitle("Depósito")
    .setColor("#caaa00")
    .setDescription(`Você depositou no **Banco** um valor de **R$${args[0]}**!`);

    message.reply({embeds: [embed7]});
    client.db.add(`bank/${message.guild.id}/${message.author.id}`, args[0]);
    client.db.sub(`money/${message.guild.id}/${message.author.id}`, args[0]);
} 
}