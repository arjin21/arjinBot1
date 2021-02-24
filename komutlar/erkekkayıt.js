const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("MANAGE_NICKNAMES"))
 return message.channel.send(
 `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
 );
 let member = message.mentions.members.first();
 let isim = args.slice(1).join(" ");
 let yas = args.slice(1).join(" ");
 if (!member) return message.channel.send("❌ Bir Üye Etiketlemelisin!");
 if (!isim) return message.channel.send("❌ Bir İsim Yazmalısın!");
 member.setNickname(`${isim}`);
 member.roles.remove('813897048751472640')
 member.roles.add('813897095375355945')
const embed = new Discord.MessageEmbed()


 .addField(`** arjinBot kayıt sistemi**`,
 `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.cache.get('813896849152802896').send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ["nick", "isim"],
 permLevel: 0
};
exports.help = {
 name: "erkek",
 description: "erkek kayıt komutu.",
 usage: "erkek"
};