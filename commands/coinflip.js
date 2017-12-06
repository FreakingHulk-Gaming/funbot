const prefix = "fun "

const result = Math.round(Math.random())

module.exports.run = (bot, message, args) => {
  if (message.content == prefix + "coinflip") {
    if (result) {
      message.channel.send("***Coinflip***\nThe coin landed on heads.").then(m => m.delete(2500))
    }
    else {
      message.channel.send("***Coinflip***\nThe coin landed on tails.").then(m => m.delete(2500))  
    }
  }
}

module.exports.help = {
  name: "",
  usage: "",
  information: ""
}
