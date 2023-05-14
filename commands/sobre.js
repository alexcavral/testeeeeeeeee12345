const moment = require("moment");
let TempoCollector = 10;
let SOBREMIM = new Set();
const Discord = require(`discord.js`)

module.exports = {
    name: 'sobremim',
    aliases: ['sobre', 'bio', 'biografia'],
    category: "Config",
    async execute(client, message, args) {

const sobremim = args.slice(0).join(" ");
        if (!sobremim)
            return message.reply("🔔 | Insira uma mensagem para o sobremim")

        if (sobremim.length > 100) {
            message.reply("🔔 | Sua mensagem não deve ter mais que 100 caracteres")
        }
       
                            message.reply(`Sobremim setado com sucesso!`)
                            client.db.set(`sobre/${message.author.id}`, sobremim)
                            
    
                            
                            
                        
                           

                        
                    }
                }