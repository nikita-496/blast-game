const { gameSettings } = require("./gameManager");

function calculateNumber(width, size, x) {
  let number;
  for (let i = 1; i <= size; i++) {
    if ((x >= width * (i - 1) && x <= width) || (x >= width * (i - 1) && x <= width * i)) {
      number = i;
    }
    continue;
  }
  return number;
}

function defineTail(x, y) {
  let result 
 
  const width = gameSettings.tails.sizeTail.width;
  const height = gameSettings.tails.sizeTail.height;
  const size = gameSettings.field.size;

  for (let k = 1; k <= size; k++) {
    if ((y >= height * (k - 1) && y <= height) || (y >= height * (k - 1) && y <= height * k)) {
      result = defineCellNumber(k);
      break;
    }
  }

  function getSerialNumber(growth) {
    serialNumber = calculateNumber(width, size, x);
    return serialNumber += size * growth;
  }

  function defineCellNumber(row) {
    let serialNumber;
    switch (row) {
      case 1:
        serialNumber = getSerialNumber(0);
        break;
      case 2:
        serialNumber = getSerialNumber(1);
        break;
      case 3:
        serialNumber = getSerialNumber(2);
        break;
      case 4:
        serialNumber = getSerialNumber(3);
        break;
      default:
        serialNumber = 11;
        break;
    }
    return serialNumber;
  }

  return result 
}

module.exports = { defineTail };
