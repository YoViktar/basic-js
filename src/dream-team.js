const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  let unsort = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== "string") {
      continue;
    }
    let arrayTrim = members[i].trim();
    unsort.push(arrayTrim[0].toUpperCase());
  }
  return unsort.sort().join("");
};
