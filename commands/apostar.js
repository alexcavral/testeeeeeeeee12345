const Discord = require('discord.js');

const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];

module.exports = {
    name: "apostar",
    aliases: ['slots'],
    category: "Economia",

    async execute (client, message, args) {
       
let user = message.author;
    let moneydb = await client.db.get(`money/${message.guild.id}/${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
    let moneymore = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você não tem tudo isso`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Coloque um valor para apostar`);
        
    let embed5 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você não pode apostar quantias abaixo de 0!`);

    

    if (!money) return message.reply({embeds: [moneyhelp]});
    if (money > moneydb) return message.reply({embeds: [moneymore]});
        if(money < 0) return message.reply({embeds: [embed5]});

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 2
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 1
        win = false;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nVocê ganhou ${money} 💵`)
            .setColor("#caaa00")
        message.reply({embeds: [slotsEmbed1]})
        client.db.add(`money/${message.guild.id}/${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nvocê perdeu ${money} 💵`)
            .setColor("#caaa00")
        message.reply({embeds: [slotsEmbed]})
        client.db.sub(`money/${message.guild.id}/${user.id}`, money)
    
    }
}
}