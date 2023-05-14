const Discord = require('discord.js');
const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js")

module.exports = {
  name: 'autoconfig',
  aliases: ['ac', 'auto', 'config'],
  category: "Config",

  async execute(client, message, args) {

     if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(` ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };
    let at =  await client.db.get(`autoconfig/${message.guild.id}`);
    if(at === true) return message.reply(`Parece que este servidor já tem os canais criados e configurados!`)
    if(at === false) {

     } else {
    
    
const Channel = message.guild.channels.create('Dicky', {
   type: "GUILD_CATEGORY",

                
            })
            message.reply(`Todos os canais foram criados e configurados com sucesso!`)

client.db.set(`autoconfig/${message.guild.id}`, `${Channel.id}`)
                
    
  }
}
}