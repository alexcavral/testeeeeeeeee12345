const Discord = require("discord.js")
const fs = require('fs');
  const { MessageEmbed } = require("discord.js");
const { post } = require("node-superfetch");
 
module.exports = {
  name: 'addmoney',
  aliases: ['add'],

  async execute(client, message, args) {
    if(message.author.id != "722207631112142909") return;
    
    let user = message.mentions.members.first() 
    
     let embed1 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você tem que mencionar alguém para adicionar!`);

    if (!user) {
        return message.reply({embeds: [embed1]})
    }
    
     let embed2 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Coloque um valor válido para adicionar!`);
  
    if (!args[1]) {
        return message.reply({embeds: [embed2]})
    }
    
    let embed5 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você não pode adicionar quantias abaixo de 0!`);

    if(args[1] < 0) {
        return message.reply({embeds: [embed5]})
    }
    
    let embed7 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor númerico para adicionar! `);

    if (isNaN(args[1])){
        return message.reply({embeds: [embed7]})
    }
    
    let embed8 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Dinheiro adicionado com sucesso!`);
    
    message.reply({embeds: [embed8]})
    
   client.db.add(`money/${message.guild.id}/${user.id}`, args[1]);
    
    }
    }