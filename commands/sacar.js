 const Discord = require("discord.js");

module.exports = {
  name: 'sacar',
  category: "Economia",

  async execute(client, message, args) {
    
    let member = client.db.get(`bank/${message.guild.id}/${message.author.id}`);

    let embed2 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Coloque o valor do saque!`);
  
    if (!args[0]) {
        return message.reply({embeds: [embed2]});
    };
    let embed4 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você não tem Dinheiro suficiente no Banco para realizar o saque!`);

    if (member < args[0]) {
        return message.reply({embeds: [embed4]});
    };
    let embed5 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor maior que **0** para realizar o saque!`);

    if(args[0] < 0) {
        return message.reply({embeds: [embed5]});
    };
    let embed7 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor numerico para realizar o saque!`);

    if (isNaN(args[0])){
        return message.reply({embeds: [embed7]});
    };
    let embed6 = new Discord.MessageEmbed()
    .setTitle("Saque Efetuado com sucesso!")
    .setColor("#caaa00")
    .setDescription(` Você sacou no **Banco** um valor de **R$${args[0]}**!`);

    message.reply({embeds: [embed6]});
    client.db.add(`money/${message.guild.id}/${message.author.id}`, args[0]);
    client.db.sub(`bank/${message.guild.id}/${message.author.id}`, args[0]);
} 
}
