const Discord = require('discord.js');
const ms = require('parse-ms');


module.exports = {
  name: 'corrida',
  aliases: ['cr'],
  category: "Economia",

  async execute(client, message, args) {

    let user1 = message.author;
    let user = message.mentions.members.first() 
    
    let carro1 = await client.db.get(`vin/${message.guild.id}/${user1.id}/audi`)

  
    if(!carro1) return message.reply(`você não possui nenhum carro, digite **${client.db.get(`${message.guild}.prefix`) || "%"}buy audi** para comprar um carro.`)

    if(!user) {
        return message.reply(`Você tem que mencionar um membro para apostar uma corrida!`);
    };
    
    
    let acarro1 = await client.db.get(`vin/${message.guild.id}/${user.id}/audi`)

    if(user.id == user1.id){
        return message.reply(`Você não pode apostar uma corrida com si mesmo!`);
    };

    if(!acarro1) return message.reply(`O usuário ${user} não possui nenhum carro, peça para ele comprar um usando **${client.db.get(`${message.guild}.prefix`) || "%"}buy audi**`)

    let competidores = [user, user1];
    let vencedor = competidores[Math.floor(Math.random() * competidores.length)];

    message.reply({
        content: `${user}, ${message.author} quer apostar numa corrida de carros com você!\nClique abaixo para aceitar a corrida.`,
        components: [
            new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                        .setStyle("SUCCESS")
                        .setLabel("Correr")
                        .setCustomId(`aceitar`)
                )
        ]
    }).then(() => {

        let filtro = (msg) => msg.customId === `aceitar` && msg.user.id === user.id;
        let coletor = message.channel.createMessageComponentCollector({ filter: filtro, max: 1 })

        coletor.on("collect", (c) => {

            if (vencedor.id === user.id) {

                c.reply(`Parabéns ${vencedor}, você ganhou a corrida entre o(a) ${user1}.`);
                

            } else if (vencedor.id === user1.id) {

                c.reply(`Parabéns ${vencedor}, você ganhou a corrida entre o(a) ${user}.`);
                

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

});
    });

  }
}