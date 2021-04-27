module.exports = {
  name: 'ticket',
  aliases:[],
  permissions: [],
  description: 'open a ticket',
  async execute(client, message, args, cmd, Discord, profileData){
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    channel.setParent('829973674118348811');

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true
    });

    const embed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle(`${message.author.username}'s Ticket`)
	    .setDescription(`Someone will be with you shortly.\nWhile you wait, please describe your problem.\n\n🔒 Close Ticket\n⛔ Delete Ticket`)
    const reactionMessage = await channel.send(embed);

    try{
      await reactionMessage.react('🔒');
      await reactionMessage.react('⛔');
    }catch(err){
      channel.send('Error sending reactions.');
      throw err;
    }

    const collector = reactionMessage.createReactionCollector((reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
    {dispose: true }
    );

    collector.on('collect', (reaction, user) => {
      switch (reaction.emoji.name) {
        case '🔒':
          channel.updateOverwrite(message.author, { 
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false
          });
          const close = new Discord.MessageEmbed()
	          .setColor('#0099ff')
	          .setDescription(`Ticket Closed.`)
          channel.send(close);
        break;
        case '⛔':
          const deleting = new Discord.MessageEmbed()
	          .setColor('#0099ff')
	          .setDescription(`Deleting the ticket in 5 seconds.`)
          channel.send(deleting);
          setTimeout(() => channel.delete(), 5000);
        break;
      }
    });

    message.channel.send(`Ticket Created! ${channel}`).then((msg) => {
      setTimeout(() => msg.delete(), 7000);
      setTimeout(() => message.delete(), 3000);
    }).catch((err) => {
      throw err;
    });
  }
}