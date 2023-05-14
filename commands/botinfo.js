const Discord = require('discord.js');
  
module.exports = {
  name: 'botinfo',
  aliases: ['infobot', 'info-bot', 'bot-info', "bi"],
  category: "Bot",


  async execute(client, message, args) {
    let cpu2 = process.cpuUsage()
    let cpuU = cpu2.user.toString()[0] + cpu2.user.toString()[1]
    let cpuS = cpu2.system.toString()[0] + cpu2.system.toString()[1]
    cpu2 = cpuU / 100 * cpuS


const help = new Discord.MessageEmbed()

.setTitle(`Olá ${message.author.username}, aqui está algumas informações sobre mim!`)
.setColor("#caaa00")
.addFields(
        {
          name: 'Meu nome:',
          value: 'Olá me chamo Dicky e fui criada em 16/12/2021, sendo colocada ao público no dia 2/2/2022!'
        },
        {
        name: 'Programada em',
        value: 'Sou programada na linguagem **JavaScript**, usando a biblioteca **Discord.js**'
        },
        {
        name: 'Versão atualmente:',
        value: 'Estou na versão **0.2**!'
        },
        {
        name: 'Comandos:',
        value: `Atualmente tenho **${client.commands.size}** comandos.`         
        },
        {
        name: 'Devellopers',
        value: 'Fui desenvolvida pelo **<@722207631112142909>**.'

        },
       {
        name: `Servers`,
        value: `Atualmente estou em **${client.guilds.cache.size}** servidores!`

        },
       {
        name: 'Help',
        value: 'Você pode ver minha lista de comandos digitando o comando %ajuda/help '
        }
      )
.setFooter(`${message.guild.name} | Comando utilizado por: ${message.author.tag}`)
.setTimestamp()

message.reply({embeds: [help]})
}  
}
