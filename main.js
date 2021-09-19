const Discord               = require("discord.js");
const Proton                = require("proton-io");
const express               = require("express");
const { spam }              = require("./swear.json");
const token                 = process.env.TOKEN
const app                   = express();
const bot                   = new Discord.Client();


const listener = app.listen(process.env.PORT, () => {
  console.log("PORT: " + listener.address().port);
});

let CommandsFolder = "./commands";
let EventLoad = "./events";
let azdroID = ["597136012929400873"];
let owner = false;
let defaultCommands = false;

const upCommands = new Proton(bot, CommandsFolder, EventLoad, azdroID, {owner, defaultCommands });

let botlaraCevapVer = true; // Botlara cavab verməz (açıqdır)
let etiketlePrefixOgren = false; // Tag etdikdə prefixini yazar (bağlıdır)
let etiketiPrefixOlarakKullan = false; // Tag`ı prefix olaraq qəbul edər. (bağlıdır)

bot.on('message', async (msg) => {
  
  var prefix = "."
  
upCommands.message(
  
msg,prefix,{botlaraCevapVer, etiketiPrefixOlarakKullan, etiketlePrefixOgren}
)
})

bot.on('guildMemberAdd', member => {
    
  member.roles.add('777543865431097355');
  
  member.send("**EnDWaR** Discord Serverinə xoş gəldiniz. Qaydalara riayət edin. Xoş söhbətlər.");
  
  bot.channels.cache.get('738873633342226521').send(`Serverimizə <@${member.id}> adlı istifadəçi qoşuldu. Sizinlə birlikdə **${member.guild.memberCount}** nəfər olduq.`)
 
});

bot.on('guildMemberRemove', member => {
  
  bot.channels.cache.get('738873633342226521').send(`\`${member.username}\` adlı istifadəçi bizi tərk etdi. Qalan istifadəçi sayı **${member.guild.memberCount}**`)
 
});

// Söyüş Söymə
bot.on("message", async msg => {
  
  if (msg.author.bot)  return;
  
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    let confirm = false;   
    for(let i = 0; i < spam.length; i++ ) {
      if (msg.content.toLowerCase().includes(spam[i].toLowerCase()))
        confirm = true;      
    }

    if (confirm) {
      let kontent = msg.content;
      let kufurbaz = msg.author.id;
      
      bot.channels.cache.get('889082286128136204').send(`**Söyüş yazan:** <@${kufurbaz}> \n**Mesaj:** ${kontent} \n ➖`);
      
      msg.delete();
      return msg.channel.send("Söyüş söymək olmaz yoxsa BAN !!! 😡");   
    }   
  } 
}); 

bot.login(token);