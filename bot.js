const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Başarıyla aktifleşti ${client.user.tag}!`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', async function(err, files) {
  if (!files) return console.log('Komut yok')
  if (err) console.log('Komut yok');
  for (const x of files.filter(x => x.endsWith('.js'))) {
    let details = require(`./komutlar/${x}`);
    console.log(`${details.help.name} yüklendi`);
    client.commands.set(details.help.name, details);
    if (details.conf.aliases.length != 0) {
      for (const alias of details.conf.aliases) {
        client.aliases.set(alias, details.help.name);
      }
    }
  }
});

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '+avatar') {
      // Send the user's avatar URL
      message.channel.send(message.author.displayAvatarURL());
    }
  });

  client.on('message', msg => {
    if (msg.content === '+yardım') {
        var embed = new Discord.MessageEmbed()
                .setTitle('Yardım komutları')
                .setColor('RANDOM')
                .setDescription('+mod, +eğlence, +diğer')
      msg.reply(embed);
      msg.delete()
    }
    if (msg.content.toLowerCase().startsWith('+söylet')) {
      var args = msg.content.split(' ').slice(1)
      var mesaj = args.slice(0).join(' ')
      msg.channel.send(mesaj) 
      msg.delete()
      }
  });

  client.on('message', msg => {
    if (msg.content === '') {
      msg.delete('+panic');
    }
  });

  client.on('message', msg => {
    if (msg.content === '+panic') {
        var embed = new Discord.MessageEmbed()
      msg.channel.send('https://tenor.com/view/stonks-up-stongs-meme-stocks-gif-15715298')
    }
  });

  client.on('message', msg => {
    if (msg.content === '+stonks') {
        var embed = new Discord.MessageEmbed()
      msg.channel.send('https://tenor.com/view/stonks-up-stongs-meme-stocks-gif-15715298')
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('Aleykümselam Hoşgeldin')
    }
  });

  client.on('message', msg => {
    if (msg.content === '+diğer') {
        var embed = new Discord.MessageEmbed()
                .setTitle('Diğer komutlar')
                .setColor('RANDOM')
                .setDescription('+davet, +komutlar')
      msg.reply(embed);
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === '+davet') {
        var embed = new Discord.MessageEmbed()
                .setTitle('Davet linki')
                .setColor('RANDOM')
                .setDescription('https://discord.com/oauth2/authorize?client_id=802293709693517874&scope=bot&permissions=2147483647')
      msg.reply(embed);
    }
  });

  client.on('message', msg => {
    if (msg.content === '+mod') {
        var embed = new Discord.MessageEmbed()
                .setTitle('Moderasyon komutları')
                .setColor('RANDOM')
                .setDescription('+kick, +ban, +temizle <miktar>, +erkek <kişi> <isim>, +kız <kişi> <isim>, +sunucular, +istatistik, +ping, +sunucu-bilgi, +kullanıcı-bilgi')
      msg.reply(embed);
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === '+eğlence') {
        var embed = new Discord.MessageEmbed()
                .setTitle('Eğlence komutları')
                .setColor('RANDOM')
                .setDescription('+avatar, +stonks, +söylet, +havadurumu <yer>, +sorusor <soru>, +tkm ')
      msg.reply(embed);
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === '+sunucular') {
        var embed = new Discord.MessageEmbed()
                .setTitle('Botunuzun olduğu sunucu sayısı')
                .setColor('RANDOM')
                .setDescription("botunuz " + client.guilds.cache.size + " sunucuda yer alıyor")
      msg.reply(embed);
      msg.delete()
    }
  });

  setInterval(() => {
    client.channels.cache.get("811553725360767007").send(
    new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('arjinBot')
    .addField("Botumuzu sevdiysen sunucuna eklemeye ne dersin? https://discord.com/oauth2/authorize?client_id=802293709693517874&scope=bot&permissions=2147483647")
    )}, 1800000)



    client.on('message', message => {
      // Ignore messages that aren't from a guild
      if (!message.guild) return;
    
      // if the message content starts with "!ban"
      if (message.content.startsWith('+ban')) {
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Ban the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             * Read more about what ban options there are over at
             * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
             */
            member
              .ban({
                reason: 'They were bad!',
              })
              .then(() => {
                var embed = new Discord.MessageEmbed()
                .setTitle('Başarılı')
                .setColor('RANDOM')
                .setDescription(`${user.tag} adlı kullanıcı başarıyla banlandı!`)
                message.reply(embed);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to ban the member,
                // either due to missing permissions or role hierarchy
                message.reply('Üzgünüm üyeyi banlayamadım.');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("Bu sunucuda böyle bir kullanıcı bulunulamıyor!");
          }
        } else {
          // Otherwise, if no user was mentioned
          message.reply("Hangi kullanıcıyı banlamalıyım?");
        }
      }
    });

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('+kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            var embed = new Discord.MessageEmbed()
            .setTitle('Başarılı')
            .setColor('RANDOM')
            .setDescription(`${user.tag} adlı kullanıcı başarıyla kicklendi!`)
            message.reply(embed);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Üzgünüm üyeyi atamadım.');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Bu sunucuda böyle bir kullanıcı bulunulamıyor!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Hangi kullanıcıyı kicklemeliyim?");
    }
  }
});



client.on("message",message=>{
  if(message.content==`<@!${client.user.id}>`) 
  return message.channel.send('Prefixim : +');
})

client.on('message', async message => {
  let prefix = "+"
    let client = message.client;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(' ')[0].slice(prefix.length);
    let params = message.content.split(' ').slice(1);
    let perms = client.elevation(message);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
      if (perms < cmd.conf.permLevel) return;
      cmd.run(client, message, params, perms);
    }
  })

  client.elevation = async message => {
    if (message.guild) {
      let permlvl = 0;
      if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
      if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 2;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 4;
      return permlvl;
    }
  };

client.login('ODAyMjkzNzA5NjkzNTE3ODc0.YAtIPg.KlBjbNwWWrzakA5Al1f5g-zzL60');
