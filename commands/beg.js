const profileModel = require('../models/profileSchema');

module.exports = {
  name: 'beg',
  aliases:[],
  permissions: [],
  description: 'beg for coins',
  async execute(client, message, args, cmd, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate({
      userID: message.author.id,
    }, 
    {
      $inc: {
        coins: randomNumber,
      },
    });
    const embed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle(`${message.author.username}, you begged and recieved $${randomNumber}.`)
    return message.channel.send(embed);
  }
}