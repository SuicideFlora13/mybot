const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
       
    client.user.setActivity("за 13 = GG", {type: "WATCHING"})
})

client.on('ready', () => {
  console.log ("Start");
});
