// discord constants
const d = require('discord.js');
const bot = new d.Client();
const prefix = "fun "
const result = Math.round(Math.random())
// end

//Gather commands
  bot.commands = new d.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...")
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});
//end

//events

bot.on("ready", () => {
  bot.user.setGame(`Funbot V1.0 Loaded | ${bot.guilds.array().length} servers`)
  console.log("Bot is started. Get ready for some sweet commands!")
  console.log("Bot name: " + bot.user.username)
});

bot.on("message", message => {
  if (message.content == prefix + "coinflip") {
    if (result) {
      message.channel.send("***Coinflip***\nThe coin landed on heads.")
    }
    else {
     message.channel.send("***Coinflip***\nThe coin landed on tails.") 
   }
  }
})

//end
bot.login(process.env.tok)
