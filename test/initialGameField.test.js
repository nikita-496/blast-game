const expect = require('chai').expect;

describe('create a game field with empty calls', function () {
  const createCells = require('../src/js/intialGameField/createCells').createCells;

  const cells = createCells(49);

  //empty cells for validation purpose
  function emptyСells(cells) {
    return cells.map((cell) => (cell = ''));
  }

  it('should create empty cells', function () {
    expect(cells).to.be.an('array').that.to.deep.equal(emptyСells(cells));
  });
  it('should number of cells equal to the length and height of the field', function () {
    expect(createCells(49)).to.have.lengthOf(49);
  });
});
