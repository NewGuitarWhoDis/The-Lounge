module.exports = {
  name: 'rules',
  description: "Lists the rules of the server",
  execute(client, message, args, cmd, Discord, profileData){
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Rules:")
      .setThumbnail("https://i.imgur.com/azyXElL.png")
      .addFields(
        {
          name: "Server Rules:",
          value:
            "1. Follow the Discord guidelines, found here: https://discordapp.com/guidelines\n2. No offensive / inappropriate nicknames or profile pictures.\n3Moderators reserve the right to act on their own discretion regardless of any rule.\n4. Do not DM a moderator unless it is a serious problem.\n5. Nimpersonating other discord users or public figures. This includes staff, admins, moderators, etc.\n \n",
        },
        {
          name: "Chat rules:",
          value:
            "1. No posting earrape / extremely loud videos anywhere.\n2. No everyone/here mentioning without permission.\n3. No @mentioning spam.\n4. No NSFcontent.\n5. No illegal content.\n6. No publishing of personal information.\n7. No personal attacks.\n8. No harassment.\n9. No racism or sexism.\n10Keep Political and religious discussions civil.\n11. No sexual discussions.\n12. No trolling.\n13. No spamming or overusing emojis.\n14. No walls otext.\n15. No CAPS LOCK.\n16. keep bot commands in <#812536174975254589> as much as possible.\n \n",
        },
        {
          name: "Voice Chat Rules:",
          value:
            "1. No annoying, loud or high pitch noises.\n2. Reduce the amount of background noise, if possible.",
        }
      )
      .setTimestamp()
      .setFooter(
        "These rules are subject to change, check back frequently!",
        "https://i.imgur.com/azyXElL.png"
      );
    message.channel.send(embed);
  }
}