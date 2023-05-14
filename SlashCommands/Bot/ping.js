const Discord = require("discord.js")

module.exports =  {
    name: "ping",
    description: "Veja meu ping.",
    type: "CHAT_INPUT",    
    
    run: async (client, interaction, args) => {

        const dbping = await client.db.ping()

        let embed = new Discord.MessageEmbed()
        .setColor("#caaa00")
        .setDescription(`**:zap:API Ping** \`${Math.round(client.ws.ping)}ms\`.\n**:cloud:Database Ping** \`${dbping}ms\`.`);

        interaction.reply({ embeds: [embed], ephemeral: false })

    }
}