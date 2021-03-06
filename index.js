require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN);




async function messageHandler(message) {
  console.log("message ", message);
  let response;
  switch (message.toLowerCase()) {
    case "moi":
      response = "WADAP LEILEE";
    case "juho":
      response = "jaakkoeerikki";
    
      break;
  }
  return response;
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", async (message) => {
  try {
    const response = await messageHandler(message.content);
    if (response) {
      message.reply(response);
    }
  } catch (error) {
    message.reply("Virhe ", error);
  }
});


