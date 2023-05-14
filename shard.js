const {ShardingManager, Client} = require('discord.js');
const client = new Client();
const config = require('./config.json');

const shards = new ShardingManager("./index.js", {
    token: config.TOKEN,
    totalShards: "auto"
});

shards.on("shardCreate", async (shard) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Ligado na shard #${shard.id}`)

    let channel = await client.channels.cache.get("843242365628317726");

    channel.send(`A #${shard.id} Foi Ligada!`)
});

shards.spawn(shards.totalShards, 10000);
