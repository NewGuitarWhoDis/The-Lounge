const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) =>{
  console.log(`[log] - ${member.tag} joined the server`);
  let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');
  member.roles.add(welcomeRole);
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 1000,
    bank: 0,
  });
  profile.save();
  console.log(`[DB] - added ${member.tag} to the database with id: ${member.id}`);
};