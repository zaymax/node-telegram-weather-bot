var TelegramBot = require('node-telegram-bot-api');

//Instalujeme token, ktery jsme dostali od @BotFather
var token = 'Tady_nechame_token';
//
var bot = new TelegramBot(token, {polling: true});

// Napsat me ... (/echo Hello World! - odesle zpravu s timto privitanim.)
bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

// Prikaz bez parametru
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Foto muze byt: path file, stream nebo parametr file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Awesome cats'});
});