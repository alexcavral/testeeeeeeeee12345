const Discord = require("discord.js")

module.exports =  {
    name: "atm",
    description: "Veja informações da sua carteira.",
    type: "CHAT_INPUT",    
       
    run: async (client, interaction, args) => {
      

      let user = interaction.author;

    let money = client.db.get(`money/${interaction.guildId}/${user.id}`)
    if(money === null) money = 0;
    
  
    let bank = client.db.get(`bank/${interaction.guildId}/${user.id}`)
    if(bank === null) bank = 0;
    
    let diamantes = client.db.get(`diamantesm/${user.id}`)
    if(diamantes === null) diamantes = 0;

    const embed = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setTitle("Saldo na Carteira")
    .setDescription(`**${user.username}**, veja as informações da sua carteira:` +
    `\n\nDinheiro: **R$${money}**` +
    `\nBanco: **R$${bank}**` +
    `\nDiamantes: **${diamantes}**`)
    .setFooter("Informações da sua carteira!")
    .setTimestamp();

    interaction.reply({ embeds: [embed], ephemeral: false })

} 
}