const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5996118349:AAE1mCqnTG66JXUXLpqoR0SCJvufe04dbN8';

// Create a new bot instance
const bot = new TelegramBot(token, {polling: true});

// Handle /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Welcome to the bot! Type /help to see available commands.`);
});

// Handle /help command
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `Available commands:
  /start - Start the bot
  /help - Show available commands
  /info - Show bot information
  /greet - Greet the user with their name`);
});

// Handle /info command
bot.onText(/\/info/, (msg) => {
  bot.sendMessage(msg.chat.id, `Bot information:
  Version 1.0
  Developed by Your Name`);
});

// Handle /greet command
bot.onText(/\/greet/, (msg) => {
  const name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, `Hello, ${name}! Welcome to the bot.`);
});

// Handle all other messages
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, `Command not recognized. Type /help to see available commands.`);
});
