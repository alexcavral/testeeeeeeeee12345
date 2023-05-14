module.exports = {
  name: 'cmdblock',
  aliases: ['block'],
  category: "Config",
  async execute(client, message, args) {
     if (!message.member.permissions.has("MANAGE_CHANNELS"))
   {
      return reply(`Você não pode utilizar este comando, você precisa da permição de gerenciar canais!`)
    }
let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
if(!canal) return message.reply('Mencione um canal ou ID dele!')

client.db.set(`block/${canal.id}`, canal.id)
message.reply(`**Canal de block setado com sucesso**`)
}
}