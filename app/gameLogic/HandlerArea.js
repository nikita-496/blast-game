import Main from '../view/main/Main';
import checkTiles from './checkTilesType';
import collectAdjacentCoords from './defineAdjacent';
import getAdjusentTiles from './getAdjusentTiles';
import createHashTiles from './hashTiles';

class HandlerArea {
  _activeTile = null;
  _testedTile = null;
  _tiles = null;
  _sameTyepTiles = null;

  constructor(active, tiles, tested) {
    this._a = new Main();
    this._tested = tested;
    this._activeTile = active;

    this._tiles = tiles;
    console.log(this._activeTile);
    this._sameTyepTiles = this.checkTypeTiles();
  }

  searchAdjust(x, y) {
    return collectAdjacentCoords(x, y);
  }

  getAdjustByCoords() {
    const self = this;
    const coordsAdjust = this.searchAdjust(
      this._activeTile._position.x,
      this._activeTile._position.y
    );
    return getAdjusentTiles(this._tiles, coordsAdjust, self._tested);
  }

  checkTypeTiles() {
    const adjustTiles = this.getAdjustByCoords();
    console.log(adjustTiles);
    return checkTiles(this._activeTile, adjustTiles);
  }

  fillHashTiles() {
    let i = this._a._area;
    const self = this;
    console.log(this._sameTyepTiles);

    return createHashTiles(this._sameTyepTiles, i, self._activeTile);
  }

  setTestedTile() {
    const acitveTestedTiles = {};
    acitveTestedTiles[this._activeTile.__instanceId] = this._activeTile;
    return acitveTestedTiles;
  }
}

export default HandlerArea = HandlerArea;
