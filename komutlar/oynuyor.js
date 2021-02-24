const Discord = require('discord.js');
exports.run = function(client, message, args) {
 if(message.author.id !== '799581255195688960') return message.reply('Bu komutu kullanamazsın. Bu komut Yapımcı Komutudur');
 const sayMessage = args.join(` `);
 client.user.setActivity(sayMessage);
 message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
 }
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'oyundeğiş',
 description: 'Botun oynuyor kısmını degiştirir.',
 usage: 'oyundeğiş'
};