const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
       
    client.user.setActivity("за 13 = GG", {type: "WATCHING"})
})

console.log ("Start");
client.on('message', async message => {
    if (message.content == "/ping") return message.reply("`я онлайн!`") && console.log(`Бот ответил ${message.member.displayName}, что я онлайн.`)
});
