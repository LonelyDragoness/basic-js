module.exports = function createDreamTeam(members) {
  let secretName = [];
  if (!members) {return false}
  else if (members.isArray ||  members !== []) {
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) == 'string') {
        secretName.push(members[i].trim()[0].toUpperCase());
      }
    }
  } else return false;
  return secretName.sort().join('');
};