const Discord = require('discord.js');
const moment = require('moment');
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

var ayarlar = require('../ayarlar.json');

exports.run = (bot, message, args) => {
 let cpuLol;
 cpuStat.usagePercent(function(err, percent, seconds) {
 if (err) {
 return console.log(err);
 }
 const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 const embedStats = new Discord.MessageEmbed()
 .setAuthor(bot.user.username + " | İstatistikler", bot.user.avatarURL())
 .setColor("#FF0000")
 .addField("❯ Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 32768 / 32768).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
 .addField("❯ Çalışma Süresi ", `${duration}`)
 .addField("❯ Bot İstatistikleri", stripIndents`
 \`\`\`yaml
 Kullanici: ${bot.users.cache.size.toLocaleString()} 
 Sunucu: ${bot.guilds.cache.size.toLocaleString()} 
 Kanal: ${bot.channels.cache.size.toLocaleString()}
 \`\`\`
 `)
 .addField("❯ Versiyonlar", stripIndents`
 » Discord.js: v${version}
 » Node.js: ${process.version}
 `)
 .addField("❯ CPU", `\`\`\`yaml\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
 .addField("❯ CPU Kullanımı", `%${percent.toFixed(8)}`)
 .addField("❯ İşletim Sistemi", `${os.platform()} | ${os.arch()} Bit`) 
 message.channel.send(embedStats)
 });
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['i'],
 permLevel: 0
 };
 
 exports.help = {
 name: 'istatistik',
 description: 'Botun istatistiklerini gösterir.',
 usage: 'istatistik'
 };