const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

// For /joke message
bot.onText(/\/joke/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    ); // return promise
    console.log("My response", response);
    //     My response Response {
    //   status: 200,
    //   statusText: 'OK',
    //   headers: Headers {
    //     'content-type': 'application/json; charset=utf-8',
    //     vary: 'Accept-Encoding',
    //     'x-powered-by': 'Express',
    //     'access-control-allow-origin': '*',
    //     etag: 'W/"6d-2m7ULVIiV9S7JLTqgA8IzOhpzpo"',
    //     'content-encoding': 'gzip',
    //     'x-cloud-trace-context': '255c4622ed01815278ad7d061b3dd72d',
    //     date: 'Wed, 09 Jul 2025 04:58:16 GMT',
    //     server: 'Google Frontend',
    //     'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    //     'transfer-encoding': 'chunked'
    //   },
    //   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
    //   bodyUsed: false,
    //   ok: true,
    //   redirected: false,
    //   type: 'basic',
    //   url: 'https://official-joke-api.appspot.com/random_joke'
    // }
    const joke = await response.json(); // return promise
    console.log("My joke", joke);
    //     My joke {
    //   type: 'general',
    //   setup: 'Which side of the chicken has more feathers?',
    //   punchline: 'The outside.',
    //   id: 295
    // }
    //         {
    //   "type": "general",
    //   "setup": "What does C.S. Lewis keep at the back of his wardrobe?",
    //   "punchline": "Narnia business!",
    //   "id": 22
    // }
    // send the message
    bot.sendMessage(chatId, `${joke.setup} \n Joke - ${joke.punchline}`);
  } catch (error) {
    bot.sendMessage(chatId, "Sorry couldn't get a joke right now");
  }
});
// to see the error
bot.on("polling_error", (err) => console.log(err));
// for other message
bot.on("message", (msg) => {
  if (msg.text.startsWith("/joke")) {
    return;
  }
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Type /joke for getting random joke");
});

// Environment Variable
//
// Development Dependency and Dependency
//
