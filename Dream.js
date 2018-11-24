const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("515860427528208384")
setInterval(function() {
channel.send(`laaaaaag`);
}, 25)
})
 
 
client.login(process.env.TOKEN);
