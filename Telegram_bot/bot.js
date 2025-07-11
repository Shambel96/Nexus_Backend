/* const TelegramBot = require("node-telegram-bot-api");
const nodeFetch = require("node-fetch");
require("dotenv").config();

const token = process.env.TOKEN;
console.log(`my token : ${token}`);
const bot = new TelegramBot(token, { polling: true });

// For /joke message
bot.onText(/\/joke/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log("my response:", response);
    const joke = await response.json(); // return promises
    console.log("my Joke:", joke);
    // send the message
    bot.sendMessage(chatId, `${joke.setup}\n Joke - ${joke.punchline}`);
  } catch (error) {
    bot.sendMessage(chatId, "Sorry couldn't get a joke");
    //console.log(error);
  }
});
// for other message
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Type /joke for getting random joke");
});
// Environment Variable
 */

const TelegramBot = require("node-telegram-bot-api");
const fetch = require("node-fetch");
require("dotenv").config();

const token = process.env.TOKEN;
console.log(`my token : ${token}`);
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/joke/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await response.json();
    bot.sendMessage(chatId, `${joke.setup}\nJoke - ${joke.punchline}`);
  } catch (error) {
    bot.sendMessage(chatId, "Sorry couldn't get a joke");
    console.error(error);
  }
});

bot.on("message", (msg) => {
  if (msg.text.startsWith("/")) {
    return;
  }
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Type /joke for getting random joke");
});
