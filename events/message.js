module.exports = async(bot, msg, args) => {
       
  switch(msg.content.toLowerCase()){
    case 'salam' : msg.channel.send('Salam, xoş gəldiniz  💞'); break;
    case 'necesen?': msg.channel.send('Təşəkkür, sən necəsən?'); break;
    case 'sen kimsen?': msg.channel.send('EndGuard - EnDWaR Discord serverinin nəzarətçi bot sistemi'); break;
    case 'neçe yaşın var?': msg.channel.send('1 yaşdan daha az'); break;
    case 'serverde neçe istifadeçi var?': msg.channel.send(`Mənimlə birlikdə ${msg.guild.memberCount} nəfər.`); break;
    case 'klanın botunu etiketle': msg.channel.send(`<@839440434005803028>`); break;
    case 'qarabağ': msg.channel.send('Azərbaycandır ! :flag_az:'); break;
    case 'aue': msg.channel.send('Jizn voram :love_you_gesture:'); break;
    case 'yetkili': msg.reply('birazdan gələcək'); break;
    case 'çox yatırsız': if(msg.author.id === '597136012929400873') {
        msg.channel.send('Bəli, razıyam !') } else {
        msg.channel.send('Bu söz Sadiqə məxsusdur ! :face_with_raised_eyebrow:') } break;
  }
  
}
