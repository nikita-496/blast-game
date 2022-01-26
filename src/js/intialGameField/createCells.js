function createCells(size) {
  let cells = [];
  for (let i = 0; i < size; i++) {
    cells[i] = '';
  }
  return cells;
}

module.exports.createCells = createCells;
