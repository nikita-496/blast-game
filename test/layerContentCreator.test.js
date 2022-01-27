const expect = require('chai').expect;

describe('create game scenario layer content', function () {
  const createElement = require('../src/js/layerContentCreator/createElement').createElement;

  it('should set as layer element sprite', function () {
    expect(createElement('sprite')).to.be.equal('Sprite create');
  });
  it('should set as layer element label', function () {
    expect(createElement('label')).to.be.equal('Label create');
  });
});
