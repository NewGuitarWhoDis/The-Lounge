const profileModel = require('../models/profileSchema');
module.exports = {
  name: 'withdraw',
  aliases:[],
  permissions: [],
  description: 'withdraw coins from the bank',
  async execute(client, message, args, cmd, Discord, profileData){

      const errorOne = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setDescription(`Withdraw amount must be a whole number.`)
      const errorTwo = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setDescription(`You don't have that amount of coins to withdraw.`)

    const amount = args[0];
    if(amount % 1 != 0 || amount <= 0) return message.channel.send(errorOne).then((msg) => {
      setTimeout(() => msg.delete(), 7000);
      setTimeout(() => message.delete(), 1000);
    }).catch((err) => {
      throw err;
    });
    try{
      if(amount > profileData.bank) return message.channel.send(errorTwo).then((msg) => {
      setTimeout(() => msg.delete(), 7000);
      setTimeout(() => message.delete(), 1000);
    }).catch((err) => {
      throw err;
    });
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      const deposit = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle(`You withdrawn $${amount} from the bank.`)
        
      return message.channel.send(deposit);
    }catch(err){
      console.log(err);
    }
  }
}