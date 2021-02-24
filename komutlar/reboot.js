const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.send('Botun yeniden başlatılmasına `onay` veriyorsanız, **`evet`** yazın.')
.then(() => {
 message.channel.awaitMessages(response => response.content === "evet", {
 max: 1,
 time: 30000,
 errors: ['time'],
 })
 .then((collected) => {
 message.channel.send(`**Bot yeniden başlatılıyor...**`).then(message => {
 console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
 process.exit(1);
 }).catch(console.error)
 })
 .catch(() => {
 message.channel.send('**Yeniden başlatma işlemi iptal edildi.**');
 });
});
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'reboot',
 description: '[Admin Komutu]',
 usage: 'reboot'
};