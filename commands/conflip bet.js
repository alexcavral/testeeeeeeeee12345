const Discord = require('discord.js');

module.exports = {
    name: "coinflip bet",
    aliases: ['coinflip', "cb", "cfb"],
    category: "Economia",

    async execute (client, message, args) {

    let user = message.mentions.members.first() 
    let user1 = client.db.get(`money/${message.guild.id}/${user.id}`)

    let member = client.db.get(`money/${message.guild.id}/${message.author.id}`)
    

    let embed1 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você tem que mencionar alguém para apostar!`);

    if (!user) {
        return message.reply({embeds: [embed1]})
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Coloque um valor válido para apostar!`);
  
    if (!args[1]) {
        return message.reply({embeds: [embed2]})
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você não possui dinheiro suficiente para realizar a aposta!`);

    if (member < args[1]) {
        return message.reply({embeds: [embed4]})
    }
    let embed45 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`O usuário ${user} não possui dinheiro suficiente para realizar a aposta!`);
    if (user1 < args[1]) {
        return message.reply({embeds: [embed45]})
    }
    let embed5 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você não pode apostar quantias abaixo de 0!`);

    if(args[1] < 0) {
        return message.reply({embeds: [embed5]})
    }
    let embed55 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(` Você não pode apostar quantias abaixo de 100!`);

    if(args[1] < 100) {
        return message.reply({embeds: [embed55]})
    }
    let embed7 = new Discord.MessageEmbed()
    .setColor("#caaa00")
    .setDescription(`Você tem que colocar um valor númerico para apostar! `);

    if (isNaN(args[1])){
        return message.reply({embeds: [embed7]})
    }
    let competidores = [user, message.author];
            let vencedor = competidores[Math.floor(Math.random() * competidores.length)];

            message.reply({
                content: `${user}, ${message.author} quer apostar \`${args[1]}\` dinheiros com você!\nClique abaixo para aceitar a aposta.`,
                components: [
                    new Discord.MessageActionRow()
                        .addComponents(
                            new Discord.MessageButton()
                                .setStyle("SUCCESS")
                                .setLabel("Apostar")
                                .setEmoji("💲")
                                .setCustomId(`aceitar`)
                        )
                ]
            }).then(() => {

                let filtro = (msg) => msg.customId === `aceitar` && msg.user.id === user.id;
                let coletor = message.channel.createMessageComponentCollector({ filter: filtro, max: 1 })

                coletor.on("collect", (c) => {

                    if (vencedor.id === user.id) {

                        c.reply(`Parabéns ${vencedor}, você ganhou \`${args[1]}\` dinheiros financiado por ${message.author}.`);
                        client.db.add(`money/${message.guild.id}/${user.id}`, args[1]);
                        client.db.sub(`money/${message.guild.id}/${message.author.id}`, args[1]);

                    } else if (vencedor.id === message.author.id) {

                        c.reply(`Parabéns ${vencedor}, você ganhou \`${args[1]}\` dinheiros financiado por ${user}.`);
                        client.db.add(`money/${message.guild.id}/${message.author.id}`, args[1]);
                        client.db.sub(`money/${message.guild.id}/${user.id}`, args[1]);

                    }

                });

                coletor.on("end", () => {
                    /*message.edit({
                        components: [
                            new Discord.MessageActionRow()
                                .addComponents(
                                    new Discord.MessageButton()
                                        .setDisabled(true)
                                        .setStyle("SUCCESS")
                                        .setLabel("Apostar")
                                        .setEmoji("💲")
                                        .setCustomId(`aceitar` + message.author.id)
                                )
                        ]
                    })
                })*/

})
            })
        }
    }
