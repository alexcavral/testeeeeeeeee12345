const ms = require('parse-ms');

module.exports = {
  name: 'daily',
  aliases: ['diario', 'coinsdiarios', 'moneydiario', "d"],
  category: "Economia",

  async execute(client, message, args) {

        let user = message.author;
        let timeout = 86400000;
        let author = await client.db.get(`worked/${message.guild.id}/${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.reply(`**Você ja coletou seu money diario, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
        } else {
            let amount = Math.floor(Math.random() * 10000) + 10000;
            client.db.add(`money/${message.guild.id}/${user.id}`, amount)
            client.db.set(`worked/${message.guild.id}/${user.id}`, Date.now())

            message.reply(`**${user} Você recebeu ${amount} de money diario volte nas proximas 24h!**`)
        }
    } 
}
