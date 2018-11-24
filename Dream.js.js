const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("508038580090830858")
setInterval(function() {
channel.send(`laaaaaag`);
}, 25)
})
 
 
client.login('MzMwODM0OTA2NzgxNDUwMjQw.Dstdrg.gFpsSna59zUcaibc625uH56Os7Y');