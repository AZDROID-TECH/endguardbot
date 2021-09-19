const Discord = require('discord.js');

module.exports = {
    name: "yaz",
    aliases: ["yaz"],
    description: "Qaydalar, Haqqında və s. mesajlar.",
    usage: "yaz",
    ownerOnly: false,
  
  
    run: async (msg, bot, prefix) => {
      
      const args = msg.content.slice(prefix.length).trim().split(' ');

if(args[1] === "qayda") { // Qaydalar mesajı
        
        if(!msg.guild.members.cache.get(msg.author.id).hasPermission("ADMINISTRATOR")) {
return msg.channel.send("Sənin belə bir əmr üçün icazən yoxdur.") }
      
      msg.delete({timeout: 2000})
      
      const qayda = "<:PINNED:785975179934171146>・İstifadəçi rolunu almış hər üzv qaydaları oxumuş və qəbul etmiş sayılır. Sona qədər qaydaları oxumamaq sizi məsuliyyətdən yayındırmır. \n \n" + 
      "<:PINNED:785975179934171146>・Söhbət kanallarında söyüş, təhqir, irqçilik, söz söhbət yaratmaq qadağandır. \n \n " +
      "<:PINNED:785975179934171146>・Reklam, elan və alqı-satqı mesajları yazmaq qadağandır. \n \n " +
      "<:PINNED:785975179934171146>・Digər üzvlərə, admin və moderatorlara qarşı hörmətsizlik etmək qadağandır. \n \n " +
      "<:PINNED:785975179934171146>・Serverdən üzvləri şəxsidə narahat etmək qadağandır. Şikayət gələrsə ömürlük serverdən atılacaqsız. \n \n " +
      "<:PINNED:785975179934171146>・Hər kanal öz məqsədi üçün istifadə edilməlidir. Konsepti pozmaq qadağandır. \n \n " +
      "<:PINNED:785975179934171146>・#🤖・cmd-console xaricində kanallara bot əmrləri yazmaq qadağandır. \n \n";
      
      const yazEmbed = new Discord.MessageEmbed()
        
                .setTitle("Discord Server Qaydalarımız")
                .setDescription(qayda)
                .setFooter("Xoş Söhbətlər")
                .setColor("#B30066")
   
   msg.channel.send(yazEmbed);
        
      }
      
    }
}