const ms = require('parse-ms');

module.exports = {
  name: 'diamantes',
  aliases: ['dm'],
  category: "Economia",

  async execute(client, message, args) {

        let user = message.author;
        let timeout = 86400000;
        let author = await client.db.get(`diamantes/${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.reply(`**Você ja coletou seus diamantes diarios, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
        } else {
            let amount = Math.floor(Math.random() * 2) + 5;
            client.db.add(`diamantesm/${user.id}`, amount)
            client.db.set(`diamantes/${user.id}`, Date.now())

            message.reply(`**${user} Você recebeu ${amount} de diamantes diarios volte nas proximas 24h!**`)
        }
    } 
}
