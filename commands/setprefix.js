//no setprefix.js

module.exports = {
  name: 'setprefix',
  aliases: ['setar-prefix', 'set-prefix', 'setar-prefix', 'prefix', 'prefixo'],
  category: "Config",
  async execute(client, message, args) {

if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply(` ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };

  let prefix = args[0];
  client.db.set(`${message.guild.id}.prefixo`, prefix)
  message.reply(`Seu prefixo foi alterado para ${prefix}`)
}
}