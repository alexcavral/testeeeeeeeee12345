const Discord = require("discord.js");


module.exports = {
  name: 'inventario',
  aliases: ['inv', 'inventário', 'inventory'],
  category: "Economia",

  async execute(client, message, args) {

let items = await client.db.get(message.author.id);
        if(items === null) items = "Você ainda nao comprou nada, digite %loja para ver os produtos disponível para compra!"

        const Embed = new Discord.MessageEmbed()
        .setColor('#caaa00')
        .addField(`Invetario de ${message.author.tag}`, `${items}`)

        message.reply({embeds: [Embed]});
}
}