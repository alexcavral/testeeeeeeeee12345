const Discord = require('discord.js');

module.exports = {
    name: "perfil",
    aliases: ['p', 'pf'],
    category: "Economia",

    async execute (client, message, args) {

       
        let user = message.mentions.members.first() 

        if(!user) {
            try {
              user = await client.users.fetch(args[0]);
            } catch(err) {
              user = message.author;
            }
        }
          
            message.channel.sendTyping()

            let dinheiros = client.db.get(`bank/${message.guild.id}/${user.id}`)
            if(dinheiros === null) dinheiros = 0;
            let rep = client.db.get(`reps/${user.id}`)
            if(rep === null) rep = 0;
            let di = client.db.get(`diamantesm/${user.id}`)
            if(di === null) di = 0;
            let vd = client.db.get(`money/${message.guild.id}/${user.id}`)
            if(vd === null) vd = 0;
            let casado = client.db.get(`casamento/${user.id}`)
            if(casado === null) casado = `Ninguém :(`;
            let sobre = client.db.get(`sobre/${user.id}`)
            if(sobre === null) sobre = `Não setado :(`;
            let emp = client.db.get(`emprego/${message.guild.id}/${user.id}`)
            if(sobre === null) sobre = `Nenhum emprego :(`;


        let embed1 = new Discord.MessageEmbed()
        .setTitle(`Perfil de ${user.tag}!`)
        .setColor("#caaa00")
        .setDescription(`> **Informações gerais**\nSobre mim: \`${sobre}\`\nCasado com: \`${casado}\`\n> **Informações da economia**\nEmprego: \`${emp}\`\nDinheiro no banco: \`${dinheiros}\`\nDinheiro na carteira: \`${vd}\`\nDiamantes: \`${di}\`\nReputações: \`${rep}\`\n> **Background**\nBrevemente...`)
        .setFooter("Que belo perfil!")
        .setTimestamp();

        message.reply({embeds: [embed1]});

    }
}