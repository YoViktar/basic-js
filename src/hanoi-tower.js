const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let object = {};
  object.turns = (2 ** disksNumber) - 1;
  object.seconds = parseInt((object.turns / turnsSpeed) * 3600);
  return object;
};
