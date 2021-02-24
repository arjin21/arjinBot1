const Discord = require("discord.js")
exports.run = (bot, message) => {
 const guildArray = bot.guilds.array()
 while (guildArray.length) {
 const embed = new Discord.MessageEmbed();
 const guilds = guildArray.splice(0,25);
 for (const guild of guilds) {
 embed.setTitle("**Bulunduğum Sunucular:**")
 embed.addField(`${guild.name} - ÜYE SAYISI : ${guild.memberCount}`, guild.id);
 embed.setColor('#0DB5C7')
 }
 message.channel.send({embed: embed});
 }
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sunucular'],
 permLevel: 0
};

exports.help = {
 name: "sunucular",
 description: "Botun bulunduğu tüm sunucular",
 usage: "sunucular"
};