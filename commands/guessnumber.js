const Discord = require('discord.js');

module.exports = {
    name: "guessnumber",
	aliases: ["guess", "number", "acertar", "numero"],//aliases aqui
    category: "Economia",//categoria
    async execute(client, message, args) {


    let embed1 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Coloque o número que acha que estou pensando após o comando! `);

    if (!args[0]) {
        return message.reply({embeds: [embed1]})
    }
    
    const nm = args.join(" ")

let i = ["1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "10"]

     let y = i[Math.floor(i.length * Math.random())]

     const give = Math.floor(Math.random() * 100);

     if(nm == y) {

        message.reply(`Eu ganhei você!! Eu pensei no número ${y} e você **perdeu ${give} dinheiros**! ${y}`)
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, give);
        
    } else {

        message.reply(`Você acertou o número que estava pensando! Como recompensa você **ganhou ${give} dinheiros**! ${y}`)
        client.db.add(`money/${message.guild.id}/${message.author.id}`, give);
        
    }
}
    
}