module.exports = {
  name: 'ping',
  aliases: ['latência', 'latencia'],
  category: "Bot",

  async execute(client, message, args) {
    const m = await message.reply('Calculando o ping...')
    const dbping = await client.db.ping()

    const pingEmbed = {
        title: ':ping_pong: Pong!',
        description: `**:stopwatch:Gateway Ping** \`${m.createdTimestamp - message.createdTimestamp}ms\`.\n**:zap:API Ping** \`${Math.round(client.ws.ping)}ms\`.\n**:cloud:Database Ping** \`${dbping}ms\`.`,
         color: '#caaa00',
    } 

    m.edit({embeds: [pingEmbed]})
}
}
