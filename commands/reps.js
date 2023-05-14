const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'reps',
  aliases: ['reputações', "reputacoes"],
  category: "Economia",

  async execute(client, message, args) {

    let user = message.author;


        let reps = client.db.get(`reps/${user.id}`)
        message.reply({content: `${message.author} Você atualmente possui ${reps} reputações.`});
        

      
    }

  }