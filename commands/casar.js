const Discord = require('discord.js');

module.exports = {
    name: "casar",
    aliases: ['marry'],
    category: "Economia",

    async execute (client, message, args) {

        let a = message.author
        let user = message.mentions.members.first()

        let anel = client.db.get(`vin/${message.guild.id}/${a.id}/Anel`)

        if(!anel) return message.reply(`você não possui um Anel, digite **${client.db.get(`${message.guild}.prefix`) || "%"}buy anel** para comprar um anel e se poder casar.`)

    if(!a) {
        return message.reply(`Você tem que mencionar um membro para se casar com ele!`);
    };
    let anel1 = client.db.get(`vin/${message.guild.id}/${user.id}/Anel`)

    if(!anel1) return message.reply(`O usuário mencionado não possui um Anel, peça para ele/ela comprar um digitando **${client.db.get(`${message.guild}.prefix`) || "%"}buy anel**`)

    if(user.id == a.id){
        return message.reply(`Você não pode se casar com si mesmo!`);
    };
    

    message.reply({components: [
        new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setStyle("SUCCESS")
                    .setLabel("Aceitar pedido")
                    .setCustomId(`aceitar`)
            )
    ], content: `${user}, ${message.author} gostaria de casar com você!\nVocê aceita casar com ${message.author}?\n*Para aceitar o pedido de casamento clique no botão abaixo*`})
.then(() => {

    let filtro = (msg) => msg.customId === `aceitar` && msg.user.id === user.id;
    let coletor = message.channel.createMessageComponentCollector({ filter: filtro, max: 1 })

    coletor.on("collect", (c) => {
        c.reply(`${message.author}, ${user} aceitou seu pedido de casamento, meus parabéns ao mais novo casal do servidor!`)
        client.db.set(`casamento/${a.id}`, `${user.id}`)
client.db.set(`casamento/${user.id}`, `${a.id}`)
    });

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

    }
}