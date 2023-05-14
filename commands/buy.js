const Discord = require('discord.js');

module.exports = {
    name: "comprar",
    aliases: ['buy'],
    category: "Economia",

    async execute (client, message, args) {

let purchase = args.join(" ");
        if(!purchase) return message.reply('Digite o nome do item que deseja adquirir')
        let items = await client.db.get(message.author.id, { items: [] });
        let amount = await client.db.get(`money/${message.guild.id}/${message.author.id}`)

        if(purchase === 'Anel'){
            if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 10000);
            client.db.push(message.author.id, "Anel");
            message.reply('Você comprou um Anel com sucesso!')
        }
        if(purchase === 'anel'){
            if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 10000);
            client.db.push(message.author.id, "Anel");
            message.reply('Você comprou um Anel com sucesso!')
        }
            if(purchase === 'aa'){
            if(amount < 1) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money_${message.guild.id}_${message.author.id}`, 1);
            client.db.push(`inv/${message.guild.id}/${message.author.id}/alface`, 4);
            message.reply('Você comprou seu computador com sucesso!')
        }
        if(purchase === 'Computador'){
            if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money_${message.guild.id}_${message.author.id}`, 10000);
            client.db.push(message.author.id, "computador");
            message.reply('Você comprou seu computador com sucesso!')
        }
        if(purchase === 'console'){
            if(amount < 1000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 1000);
            client.db.push(message.author.id, "console");
            message.reply('Você comprou um console com sucesso!')
        }
        if(purchase === 'Console'){
            if(amount < 1000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 1000);
            client.db.push(message.author.id, "console");
            message.reply('Você comprou um console com sucesso!')
        }
        if(purchase === 'controle'){
            if(amount < 50) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 50);
            client.db.push(message.author.id, "controle");
            message.reply('Você comprou um controle com sucesso!')
        }
        if(purchase === 'Controle'){
            if(amount < 50) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 50);
            client.db.push(message.author.id, "controle");
            message.reply('Você comprou um controle com sucesso!')
        }
        if(purchase === 'ak-47'){
            if(amount < 5000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 5000);
            client.db.push(message.author.id, "ak-47");
            message.reply('Você comprou uma ak-47 com sucesso, tenha cuidado para não magoar ninguém com essa arma!')
        }
        if(purchase === 'Ak-47'){
            if(amount < 5000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 5000);
            client.db.push(message.author.id, "ak-47");
            message.reply('Você comprou uma ak-47 com sucesso, tenha cuidado para não magoar ninguém com essa arma!')
        }
        if(purchase === 'ak-45'){
            if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 10000);
            client.db.push(message.author.id, "ak-45");
            message.reply('Você comprou uma ak-45 com sucesso, tenha cuidado para não magoar ninguém com essa arma!')
        }
        if(purchase === 'Ak-45'){
            if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 10000);
            client.db.push(message.author.id, "ak-45");
            message.reply('Você comprou uma ak-45 com sucesso, tenha cuidado para não magoar ninguém com essa arma!')
        }
        if(purchase === 'mercedes'){
            if(amount < 50000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 50000);
            client.db.push(message.author.id, "mercedes");
            message.reply('Você comprou uma Mercedes com sucesso, dirija com cautela!')
        }
        if(purchase === 'Mercedes'){
            if(amount < 50000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
            client.db.sub(`money/${message.guild.id}/${message.author.id}`, 50000);
            client.db.push(message.author.id, "mercedes");
            message.reply('Você comprou uma Mercedes com sucesso, dirija com cautela!')
        }
    if(purchase === 'audi'){
        if(amount < 60000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, 60000);
        client.db.push(message.author.id, "audi");
        message.reply('Você comprou um Audi com sucesso, dirija com cautela!')
    }
    if(purchase === 'Audi'){
        if(amount < 60000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, 60000);
        client.db.push(message.author.id, "audi");
        message.reply('Você comprou um Audi com sucesso, dirija com cautela!')
    }
    if(purchase === 'vip global'){
        if(amount < 20000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, 20000);
        client.db.push(message.author.id, "VIP Global");
        message.reply('Você comprou um VIP Global com sucesso!')
    }
    if(purchase === 'VIP global'){
        if(amount < 20000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, 20000);
        client.db.push(message.author.id, "VIP Global");
        message.reply('Você comprou um VIP Global com sucesso!')
    }
    if(purchase === 'vip local'){
        if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, 10000);
        client.db.push(message.author.id, "VIP Local");
        message.reply('Você comprou um VIP Local com sucesso!')
    }
    if(purchase === 'VIP local'){
        if(amount < 10000) return message.reply('você não possui dinheiro suficiente para realizar a compra!');
        client.db.sub(`money/${message.guild.id}/${message.author.id}`, 10000);
        client.db.push(message.author.id, "VIP Local");
        message.reply('Você comprou um VIP Local com sucesso!')
    }
    }
}