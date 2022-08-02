const { generateTail } = require('../../../logic/tails');

function setTile(field) {
  for (cell in field) {
    field[cell] = generateTail();
  }
  return field
}

module.exports = { setTile };
