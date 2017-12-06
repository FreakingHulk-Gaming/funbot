// discord constants
d = require('discord.js');
bot = new d.Client();
prefix = "fun "
// end

//Gather commands
  bot.commands = new discord.Collection();

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
//end
bot.login(process.env.tok)
