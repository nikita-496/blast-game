const checkFirstTileOnRow = (nunX, numRows) => {
  let x = nunX;
  let copyX = x;
  const tiles = [];
  for (let i = 1; i <= numRows; i++) {
    if (i <= x) {
      console.log(x);
      copyX = x - 52 * i;
    }
    tiles.push(copyX);
  }
  return x;
};

module.exports.checkFirstTileOnRow = checkFirstTileOnRow;
