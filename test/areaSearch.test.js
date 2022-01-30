const expect = require('chai').expect;

describe('explore the area of ​​the game field for the presence of the same type of tiles', function () {
  const collectAdjacentCoords =
    require('../src/js/utilitsOfLogic/collectAdjacentCoords').collectAdjacentCoords;

  it('should obtained the coordinates of adjacent tiles relative to the active tile', function () {
    expect(collectAdjacentCoords(4, 2))
      .to.be.a('object')
      .that.to.deep.include({ 1: '4, 57', 2: '56, 2', 3: '4, -53', 4: '-48, 2' });
    /*it('get the type of tile adjacent to the active one', function () {
    expect(defineTypeTile()).to.be.an('array').that.to.deep.equal(emptyСells(cells));
  });*/
  });
});
