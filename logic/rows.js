const { generateTail } = require('./tails');

function generateField(size) {
  const amountCeil = size * size;
  // Чем заполнена ячейка
  const valueCeil = null;
  const field = {};
  for (let i = 1; i <= amountCeil; i++) {
    field[i] = valueCeil;
  }
  return field;
}

function updateField(field, emptyCell) {
  if (Object.values(field).every((cell) => cell === null)) {
    for (let cell in field) {
      field[cell] = generateTail();
    }
  } else {
    emptyCell.forEach((cellNumber) => {
      field[cellNumber] = generateTail();
    });
  }
  return field;
}

function burnTail(field, toBurn) {
  for (let cell of toBurn) {
    field[cell] = null
  }
  return field
}

module.exports = { generateField, updateField, burnTail };
