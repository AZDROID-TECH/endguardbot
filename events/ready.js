module.exports = async(bot) => {
  
var izliyor = [
`👤 Owner by AZDROID`,
`👤 Owner by AZDROID`,
`👤 Owner by AZDROID`
];

setInterval(function() { 
  
    var random = Math.floor(Math.random()*(izliyor.length-0+1)+0);
  
   bot.user.setActivity(izliyor[random], { type: 'WATCHING' });
  
    }, 2 * 30000 );
  
  console.log(`EnDWaR PRO Aktivdir.`);
    
}