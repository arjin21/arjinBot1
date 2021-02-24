const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete({timeout: SÜRE})();
 message.guild.createChannel(`talep-${message.author.username}`, 'text').then(ch => {
 ch.createOverwrite(message.member.roles.first(),{
 VIEW_CHANNEL: false,
 }).catch()
 message.guild.roles.cache.forEach((role) => {
 if (role.permissions.has("BAN_MEMBERS")) {
 ch.createOverwrite(role,{
 VIEW_CHANNEL: true,
 }).catch()
 ch.createOverwrite(message.author.id,{
 VIEW_CHANNEL: true,
 }).catch()
 }
 })

 const embed = new Discord.MessageEmbed()
 .setTitle(`» Hey ${message.author.username} !`)
 .setAuthor("» Destek Sistemi")
 .setDescription("**Buradaki destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için [/iptal](#) yazabilirsin!**")
 .setFooter('Destek Sistemi', client.user.avatarURL())
 .setTimestamp()
 ch.send(embed).catch()
 ch.send("@everyone")
 ch.send("@here")
 ch.awaitMessages((msg)=> {
 if (msg.content === "/iptal") {
 ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
 setTimeout(()=> {
 ch.delete().catch()
 },1000)
 });
 }
 },{time:86400000})
 })
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['destek'],
 permLevel: 0,
};

exports.help = {
 name: 'talep',
 description: 'Destek talebi açar.',
 usage: 'talep'
};