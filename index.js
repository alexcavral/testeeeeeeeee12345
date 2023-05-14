const Discord = require("discord.js");//conecta com a livraria discord.js
const client = new Discord.Client({ intents: 32767})
const config = require("./config.json"); 
client.commands = new Discord.Collection();
const fs = require('fs')
const express = require('express');
const StrongDB = require('strong-db');
client.db = new StrongDB('./Database.json', { edit: true });
const app = express();

//coisas slash commands

client.slashCommands = new Discord.Collection();
client.config = require("./config.json");
require("./handler")(client);
const { glob } = require("glob");
const { promisify } = require("util");

const globPromise = promisify(glob);

client.on("interactionCreate", async (interaction) => {

  if (!interaction.guild) return;

  if (interaction.isCommand()) {

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd)
          return;

      const args = [];

      for (let option of interaction.options.data) {

          if (option.type === "SUB_COMMAND") {
              if (option.name) args.push(option.name);
              option.options?.forEach((x) => {
                  if (x.value) args.push(x.value);
              });
          } else if (option.value) args.push(option.value);
      }

      cmd.run(client, interaction, args);
  }

  if (interaction.isContextMenu()) {
      await interaction.deferReply({ ephemeral: false });
      const command = client.slashCommands.get(interaction.commandName);
      if (command) command.run(client, interaction);
      
  }
});


app.get("/", (request, response) => {
  const ping = new Date(); 
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); //Aqui meio que pede para o bot ficar on, ou seja, solicitacoes.

//=====================================================
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
for (const file of commandFolders) {
const command = require(`./commands/${file}`);
client.commands.set(command.name, command);
module.exports = {
command: client.commands
}
}
}
//=====================================================
client.on('message', async (message, guild) => {
let data = client.db.get(`${message.guild.id}.prefixo`)
let prefixo = ''

if(data == null) {
  prefixo = config.prefix
}
if(data != null) {
  prefixo = data
}

if(message.author.bot || !message.content.startsWith(prefixo)) return;
const args = message.content.slice(prefixo.length).split(/ +/);
const cmdName = args.shift().toLowerCase();
const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
if(!cmd) {
  let embederro = new Discord.MessageEmbed()
  .setTitle('Erro')
  .setDescription(`${message.author} O comando \`${cmdName}\` Não Existe!`)
  .setColor(`#caaa00`)
  message.reply({embeds: [embederro]})
}
try{
cmd.execute(client, message, args);
let channel = await client.channels.cache.get("977913083219574784");
let compl = args.join(" ") || "Nada"
            let log =  new Discord.MessageEmbed()
              .setColor("#caaa00")
              .addField("**Autor: **", `**${message.author.username}**`)
              .addField("**Comando: **", `**${cmdName}**`)
              .addField(`**O que foi executado após o comando:**`, `**${compl}**`)
              .addField("**Server: **", `**${message.guild}**`)
              .setFooter("ID do Autor:" + message.author.id)
            channel.send({embeds: [log]});
}catch(err){
console.log(err)
console.log(`O ${message.author.username} Utilizou o comando "${cmdName}" Mas Existe algum erro nele, ou ele não existe!`)
var canalerro = 
    client.guilds.cache.get("885962834918387752")
    .channels.cache.get("938503081321168937");
var erroembed = new Discord.MessageEmbed()
   .setTitle("Ocorreu um erro")
   .addField(`**Comando**`,`**${cmdName}**`)
   .addField(`**Utilizador**`,`**${message.author.tag}**`)
   .addField(`**ID do utilizador**`, `**${message.author.id}**`)
   .addField(`**Servidor que deu o erro**`,`**${message.guild.name}**`)
   .addField(`**Erro:**`,`\`\`\`js\n${err}\`\`\``)
   .setColor("#caaa00")
   canalerro.send({embeds: [erroembed]})
}
})

const TOKEN = process.env.TOKEN
client.login(TOKEN); 


/*var slash = [];

const arquivos = fs.readdirSync("./src/slashs").filter((file) =>
    file.endsWith(".js"));
    
client.on("ready", async () => {
  
   for (const files of arquivos) {
     
       const file = require(`./src/slashs/${files}`);
      
         slash.push(file)

       await client.api.applications(client.user.id).commands.post({ data: file.data })
   }
  
   client.ws.on('INTERACTION_CREATE', async (i) => {
      
      var commandso = slash.find(x => x.data.name === i.data.name.toLowerCase())
        
      if(commandso) commandso.run(client, send, i)
        
   })
     
   async function send(interaction, content) {
      return client.api.interactions(interaction.id, interaction.token).callback.post({
         data: {
            type: 4,
        data: await msg(interaction, content),
     },
      });
   }

   async function msg(interaction, content) {
      const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
         .resolveData().resolveFiles();
    
      return { ...apiMessage.data, files: apiMessage.files };
   }

})*/

client.on("ready", async () => {
  console.log("Dicky ficou on! Está pronta para trabalhar!");
   console.log("Estou em " + client.guilds.cache.size + " servidores!\n" + client.user.tag + ", " + client.user.id);
   client.user.setStatus("dnd")
   client.user.setActivity(`${client.guilds.cache.size} servidores!`, {type: "GAMING"})
   
   setInterval( async () => {
       let random = Math.floor(Math.random() * 9);
     
     
     client.user.setStatus("dnd")
     
     if (random == 0) client.user.setActivity(`%help | ${client.guilds.cache.size} servidores!`, {type: "PLAYING"})
     
     }, 1000 * 5);
});
    

//na index.js
/*client.on('guildMemberAdd', async (member) => {
  let data = client.db.get(`${member.guild.id}.welcome`);
  let canal = client.channels.cache.get(data);
  if(!canal) return;
  
  let embed = new Discord.MessageEmbed()
  .setTitle('Boas-Vindas')
  .setAuthor(member.user.tag, member.user.displayAvatarURL())
  .setDescription(`${member.user}, bem vindo(a) ao servidor ${member.guild.name}!\nAtualmente estamos com **${member.guild.members.cache.size} membros**, divirta-se conosco! :heart:`)
  .setFooter('Todos os direitos reservados')
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
  canal.send(member.user, embed)
  })*/

//aqui é o setgoodbye "necessita do guilMemberRemove"
/*client.on("guildMemberRemove", async (member) => {
let data = await client.db.get(`${member.guild.id}.goodbye`);
if(data == null) return;
let canal = client.channels.cache.get(data);
if(!canal) return;
//aqui ele puxa uma embed mais a descricao e titulo do setgoodbye
let embed = new Discord.MessageEmbed()
.setTitle('Adeus')
.setAuthor(member.user.tag, member.user.displayAvatarURL())
.setDescription(`${member.user}, Saiu do servidor! :broken_heart:`)
.setFooter('Todos os direitos reservados')
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
canal.send(member.user, embed)
})*/


 client.on("message", message => {
//aqui seguinte, basicamnete é a "if" do comando
  if(message.author.bot) return;
  if(message.content == `<@!${client.user.id}>` || message.content == `<@${client.user.id}>`) {
        const prefix = client.db.get(`${message.guild.id}.prefix`) || '%';
  const bot = new Discord.MessageEmbed()
  .setDescription(`** Olá ${message.author.username}!
  <a:yellow_seta:859198915383394365>  Meu Prefixo neste server é: \`${prefix}\`
  <a:yellow_seta:859198915383394365>  Use \`${prefix}help\` para obter ajuda!
  <a:yellow_seta:859198915383394365>  Me adicione [Aqui](https://discord.com/api/oauth2/authorize?client_id=921106209707278337&permissions=8&scope=bot)
  <a:yellow_seta:859198915383394365> Entre no meu servidor de suporte [Aqui](https://discord.gg/XYMBZzPfnY)**`)
  .setFooter('Dicky, Todos os direitos reservados')
  .setThumbnail(client.user.displayAvatarURL())
  .setColor("#caaa00")
  return message.reply({embeds: [bot]})
}
});

client.on("guildCreate", (guild, message) => {
    let canal = client.channels.cache.get('938506834128568320');
    let embedaddguilda = new Discord.MessageEmbed()
    .setColor('8A2BE2')
    .setTitle(`Adicionada`)
    .setDescription(`Fui adicionada no servidor \n**${guild.name}** \nid do server: ${guild.id} \nTotal de membros: ${guild && guild.memberCount} membros.\nestamos agora em ${client.guilds.cache.size} servers!`)
    
    canal.send({embeds: [embedaddguilda]}).then(msg => {
        msg.react('👏');
    });
})


client.on("guildDelete", (guild, message) => {
    let canal = client.channels.cache.get('938506864654712962');
    let embedaddguilda = new Discord.MessageEmbed()
    .setColor('8A2BE2')
    .setTitle(`BYE...`)
    .setDescription(`infelismente Alguem me tirou do server: ${guild.name} que tinha ${guild.memberCount} membros! agora estou em ${client.guilds.cache.size} servers`)
    
    canal.send({embeds: [embedaddguilda]}).then(msg => {
        msg.react('✊');
    });
})

client.on("shardResume", async shard => {
  const channel = client.channels.cache.get("938437710983606272")
  channel.send(`A shard **#${shard}** Foi reconectada com sucesso!`)
})

client.on("shardReconnecting", async shard => {
  const channel = client.channels.cache.get("938437710983606272")
  channel.send(`A shard **#${shard}** Esta sendo reconectada`)
})

client.on("shardDisconnect", async shard => {
  const channel = client.channels.cache.get("938437710983606272")
  channel.send(`A shard **#${shard}** Foi Desconectada temporariemente`)
})

client.on("shardReady", async shard => {
  const channel = client.channels.cache.get("938437710983606272")
  channel.send(`A shard **#${shard}** foi ligada com sucesso`)
})

const Topgg = require('@top-gg/sdk')

const webhook = new Topgg.Webhook('alex123') 
const api = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyMTEwNjIwOTcwNzI3ODMzNyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ0NzYyNjE4fQ.MmmRWAFx_y8i9QbgvIkEmAWyqupQiEJ8X5AsJnX-wUs")

setInterval(async() => {
  api.postStats({   
    serverCount: client.guilds.cache.size,
    shardCount: client.shard.count
  })
}, 300000)

Discord.Message.prototype.quote = async function(content, options) {
	const message_reference = {
		message_id:
			(!!content && !options
				? typeof content === 'object' && content.messageID
				: options && options.messageID) || this.id,
		message_channel: this.channel.id
	};
	const { data: parsed, files } = await Discord.APIMessage.create(
		this,
		content,
		options
	)
		.resolveData()
		.resolveFiles();

	this.client.api.channels[this.channel.id].messages.post({
		data: {
			...parsed,
			message_reference,
			allowed_mentions: { replied_user: false }
		},
		files
	});
};

app.post('/vote', webhook.middleware(), async (req, res) => {

  client.db.add(`diamantesm/${req.vote.user}`, 5)

const embed = new Discord.MessageEmbed()
    .setColor('bbe6f9')
    .setTitle(`**<a:coracao:837644610817884220> Acabaram de votar em mim!**`)
    .setDescription(`**Obrigado ${client.users.cache.get(req.vote.user).username} por votar, continue assim, e me ajude a crescer cada vez mais! __\`Lembrando você pode votar de 12 em 12 horas\`__ **\n\nComo recompensa de ter votado em mim você recebeu 5 Diamantes!`);
    
    client.guilds.cache.get("825018046846205962").channels.cache.get('942426767749173298').send({embeds: [embed]})
    
  res.sendStatus(200)
    
})

setInterval(async()  => { 
  const arquivo = ("./Database.json")

  let canal = await client.channels.fetch('938443417787183134')
 
 
 canal.send({
     files: [
     { attachment: arquivo, name: 'Database.json'}
   ]
 })
 }, 20000)

 /*setInterval(async()  => { 

  let channel = await client.channels.fetch('939854143051431936')

  const servers = client.guilds.cache.size
 
  channel.setName(`🌍┃Servidores: ${servers} `)

 }, 600000)*/

 process.on("multipleResolves", (type, reason, promise) => {
  console.log(`⛔ Erro detectado\n\n` + type, promise, reason)
});

process.on(`unhandledRejection`, (reason, promise) => {
  console.log(`⛔ Erro detectado\n\n` + reason, promise)
});

process.on(`uncaughtException`, (error, origin) => {
  console.log(`⛔ Erro detectado\n\n` + error, origin)
});

process.on(`uncaughtExceptionMonitor`, (error, origin) => {
  console.log(`⛔ Erro detectado\n\n` + error, origin)
});

/*client.on("messageDelete", function(message){
  let canal = message.guild.channels.cache.get(client.db.get(`${message.guild.id}.logs`))
  let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
  if(canal) {
    if(message.author.bot)
    {
    }
    else
    {
      const messagelog = new Discord.MessageEmbed()
      .setTitle(':pencil: Mensagem apagada!')
      .setAuthor(`Escrita por: ${message.author.tag}, avatar`)
      .setThumbnail(avatar)
      .setDescription(`**Canal da Mensagem:** ${message.channel.name}`)
      .addField(`Mensagem apagada!`, message)
      .setFooter(`ID do usuario: ${message.author.id}`)
      .setColor([255, 182, 193])
      canal.send(messagelog)
      }
    }
  });
client.on("messageUpdate", function(oldMessage, newMessage){
      let canal = oldMessage.guild.channels.cache.get(client.db.get(`${oldMessage.guild.id}.logs`))
      let avatar = oldMessage.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
      if(canal) {
    if(oldMessage.author.bot)
    {
    }
    else
    {
    const messagelog = new Discord.MessageEmbed()
    .setTitle('📝 Mensagem editada!')
    .setAuthor(`Editada por: ${oldMessage.author.tag}, avatar`)
    .setThumbnail(avatar)
    .setDescription(`Canal da Mensagem: ${oldMessage.channel.name}`)
    .addField(`Mensagem antiga!`, oldMessage, false)
    .addField(`Mensagem Nova!`, newMessage, false)
    .setFooter(`ID do usuario: ${oldMessage.author.id}`)
    .setColor([255, 182, 193])
    canal.send(messagelog)
    }
  }
});*/

