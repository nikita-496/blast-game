const expect = require('chai').expect;

describe('render tiles in the game field cell', function () {
  const getRandomNum = require('../src/js/utilitsOfView/gameElement/getRandomNum').getRandomNum;
  //const renderTiles = require('../src/js/utilitsOfView/gameElement/renderTiles').renderTiles;

  it('should generate random number in the range from 0 to the maximum value inclusive', function () {
    expect(getRandomNum(9)).to.be.closeTo(0, 9);
  });
  it('should generate random number integer', function () {
    expect(getRandomNum(9)).to.satisfy(Number.isInteger);
  });
  /*it('the number of tiles must be equal to the size of the field', function () {
    expect(renderTiles(9)).to.be.equal();
  });*/
});

describe('render row game filed with tiles ', function () {
  const renderRow = require('../src/js/utilitsOfView/gameElement/renderRowField').renderRow;
  const fillRowWithTitles =
    require('../src/js/utilitsOfView/gameElement/fillRowWithTitles').fillRowWithTitles;
  const checkFirstTileOnRow =
    require('../src/js/utilitsOfView/gameElement/checkFirstTile').checkFirstTileOnRow;

  it('sould rows on the y-axis by 100 units descending', function () {
    expect(renderRow(2)).to.be.equal(510 - 100 * 1);
    expect(renderRow(3)).to.be.equal(510 - 100 * 2);
    expect(renderRow(4)).to.be.equal(510 - 100 * 3);
    expect(renderRow(5)).to.be.equal(510 - 100 * 4);
    expect(renderRow(6)).to.be.equal(510 - 100 * 5);
    expect(renderRow(7)).to.be.equal(510 - 100 * 6);
    expect(renderRow(8)).to.be.equal(510 - 100 * 7);
    expect(renderRow(9)).to.be.equal(510 - 100 * 8);
  });

  it('the x-coordinate value for the first tile in the row must not change', function () {
    expect(checkFirstTileOnRow(855, 9)).to.be.equal(855);
  });

  //under the conditions of starting from 855 points
  it('the number of tiles in each rows must be equal to the size (rows/columns) of the game field', function () {
    expect(fillRowWithTitles(855, 9))
      .to.be.an('array')
      .that.to.deep.equal([855, 803, 751, 699, 647, 595, 543, 491, 439]);
  });
});
