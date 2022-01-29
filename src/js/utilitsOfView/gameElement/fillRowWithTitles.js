const fillRowWithTitles = (nunX, numRows) => {
  //the x-coordinate value for the first tile in the row
  let x = nunX;
  let copyX = x;
  const tiles = [];
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      tiles.push(copyX);
      continue;
    }
    if (i <= numRows) {
      copyX = x - 52 * (i - 1);
    }
    tiles.push(copyX);
  }
  return tiles;
};

module.exports.fillRowWithTitles = fillRowWithTitles;
