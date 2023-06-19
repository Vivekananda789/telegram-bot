const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_BOT_TOKEN with your own bot token obtained from BotFather
const bot = new TelegramBot('5920224766:AAGaPbH7KBHuRkH4WyegKnNUeL3Bo70tjE4', { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const response = 'Welcome to the Math Bot! Send me any mathematical expression, and I will calculate it for you.';
  bot.sendMessage(chatId, response);
});

// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Check if the message is a valid mathematical expression
  if (isValidExpression(messageText)) {
    try {
      const result = eval(messageText);
      bot.sendMessage(chatId, `Result: ${result}`);
    } catch (error) {
      bot.sendMessage(chatId, 'Oops, something went wrong. Please enter a valid mathematical expression.');
    }
  } else {
    bot.sendMessage(chatId, 'Invalid mathematical expression. Please try again.');
  }
});

// Function to validate mathematical expressions
function isValidExpression(expression) {
  // Regular expression to check for valid mathematical expressions
  const regex = /^[-+*/.\d\s()]+$/;
  return regex.test(expression);
}
