const expect = require('chai').expect;

describe('render tiles in the game field', function () {
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
