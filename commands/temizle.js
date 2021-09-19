const Discord = require("discord.js");

module.exports = {
    name: "sil",
    aliases: ["sil"],
    description: "Mesaj silme",
    usage: "sil",
    ownerOnly: false,
  
  
    run: async (msg,args,bot) => {
      
      if(!msg.member.hasPermission('MANAGE_MESSAGES'))
        return msg.channel.send("Belə bir əmr üçün icazəniz yoxdur!")
      
      if(isNaN(args)) return msg.reply("Heç bir rəqəm daxil etmədin!");
                
      if(args < 1 || args > 100) return msg.reply("Discord qaydalarına əsasən 1\'dən az və 100\'dən çox mesaj silmək olmaz");
      
      msg.channel.bulkDelete(Number(args) + 1)
   
 msg.channel.send("Kanaldan " + args + " mesaj sildim.").then(msg => msg.delete({timeout: 3000}));
      
    }
  
  
}