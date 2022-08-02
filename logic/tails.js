const { gameSettings } = require("../view/src/js/gameManager");

const hashTails = gameSettings.tails.types;

function getTails() {
  return hashTails;
}

function generateRandomNumber(max) {
  return (randonNumber = Math.floor(Math.random() * max) + 1);
}

function generateTail() {
  const randonNumber = generateRandomNumber(Object.keys(hashTails).length);
  return hashTails[randonNumber];
}

module.exports = { getTails, generateRandomNumber, generateTail };
