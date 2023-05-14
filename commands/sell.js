const Discord = require('discord.js');

module.exports = {
    name: "vender",
    aliases: ['sell'],
    category: "Economia",

    async execute (client, message, args) {
      let purchase = args.join(" ");
        if(!purchase) return message.reply('Digite o nome do item que deseja vender\n\nItens disponíveis para venda: **ovos**, **plantas**, **leite**, **peixes**, **minerios**')
        let items = await client.db.get(`vin/${message.guild.id}/${message.author.id}`, { items: [] });
        let amount = await client.db.get(`vin/${message.guild.id}/${message.author.id}/ovos`)
      let amount1 = await client.db.get(`vin/${message.guild.id}/${message.author.id}/planta`)
      let amount2 = await client.db.get(`vin/${message.guild.id}/${message.author.id}/leite`)
      let amount3 = await client.db.get(`vin/${message.guild.id}/${message.author.id}/peixes`)
      let amount4 = await client.db.get(`vin/${message.guild.id}/${message.author.id}/minerios`)
 
    if(purchase === 'ovos'){
            if(amount < 40) return message.reply('você não possui ovos suficientes para realizar a venda!');
            await client.db.add(`money/${message.guild.id}/${message.author.id}`, 400);
            await client.db.sub(`vin/${message.guild.id}/${message.author.id}/ovos`, 40);
            message.reply('Você vendeu 40 ovos com sucesso!')
        }
      if(purchase === 'plantas'){
            if(amount1 < 32) return message.reply('você não possui plantas suficientes para realizar a venda!');
            await client.db.add(`money/${message.guild.id}/${message.author.id}`, 200);
            await client.db.sub(`vin/${message.guild.id}/${message.author.id}/planta`, 32);
            message.reply('Você vendeu 32 plantas com sucesso!')
        }
      if(purchase === 'leite'){
            if(amount2 < 20) return message.reply('você não possui garrafas de leite suficientes para realizar a venda!');
            await client.db.add(`money/${message.guild.id}/${message.author.id}`, 200);
            await client.db.sub(`vin/${message.guild.id}/${message.author.id}/leite`, 20);
            message.reply('Você vendeu 20 garrafas de leite com sucesso!')
        }
        if(purchase === 'peixes'){
          if(amount3 < 40) return message.reply('você não possui peixes suficientes para realizar a venda!');
          await client.db.add(`money/${message.guild.id}/${message.author.id}`, 100);
          await client.db.sub(`vin/${message.guild.id}/${message.author.id}/peixes`, 40);
          message.reply('Você vendeu 40 peixes com sucesso!')
      }
      if(purchase === 'minerios'){
        if(amount4 < 100) return message.reply('você não possui minérios suficientes para realizar a venda!');
        await client.db.add(`money/${message.guild.id}/${message.author.id}`, 200);
        await client.db.sub(`vin/${message.guild.id}/${message.author.id}/minerios`, 100);
        message.reply('Você vendeu 100 minérios com sucesso!')
    }
    }
}