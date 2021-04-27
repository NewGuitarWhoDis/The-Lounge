module.exports = {
  name: 'balance',
  aliases:['bal'],
  permissions: [],
  description: 'Check the users balance',
  execute(client, message, args, cmd, Discord, profileData){
    const embed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle(`${message.author.username}'s balance`)
	    .setDescription(`Wallet: $${profileData.coins} \nBank: $${profileData.bank}`)
      .setTimestamp();
    message.channel.send(embed);
  }
}