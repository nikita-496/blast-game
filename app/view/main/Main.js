import { fillRowWithTitles } from '../../../src/js/utilitsOfView/gameElement/fillRowWithTitles';
import { getRandomNum } from '../../../src/js/utilitsOfView/gameElement/getRandomNum';
import { renderRow } from '../../../src/js/utilitsOfView/gameElement/renderRowField';

import DynamicSprite from '../../interface/DynamicSprite';
import staticSprite from '../../interface/staticSprite';
import GameField from '../gameElement/gameField/GameField';
import Tile from '../gameElement/tiles/Tile';
import HandlerArea from '../../gameLogic/HandlerArea';
import switchAdjusent from '../../gameLogic/switchAdjusent';

class Main extends cc.Layer {
  _sizeField = 9;
  _hash = {};
  _activeTile = null;
  _test = null;

  //hashSameTyepTiles
  _area = null;
  _testedTiles = null;
  _counter = 0;
  constructor() {
    super();
    this._gameField = new GameField(new staticSprite());
    this._tiles = Main.getTiles(this._sizeField, 4);
    this._tileControl = new DynamicSprite();
    this.createListeners();

    /*var size = cc.winSize;
    this.sprite = new cc.Sprite(path.PURPLE_TILE);
    this.sprite.attr({ x: size.width / 1.22, y: size.height / 2 });
    this.addChild(this.sprite, 0);*/

    this.init();
  }

  init() {
    this.addChild(this._gameField._field);

    for (let tile of this._tiles) {
      this.addChild(tile, 100);
    }
  }

  createListeners() {
    const self = this;
    const listener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        const tap = touch.getLocation();

        if (self._counter === 0) {
          for (let i = 0; i < self._tiles.length; i++) {
            const currTile = self._tiles[i];
            const tileRect = currTile.getBoundingBox();
            if (cc.rectContainsPoint(tileRect, tap)) {
              const mainActive = new HandlerArea(currTile, self._tiles, self._testedTiles);

              self._area = mainActive.fillHashTiles();

              self._testedTiles = mainActive.setTestedTile();

              self._counter = self._counter + 1;
              break;
            }
          }
        }

        while (self._counter < Object.keys(self._area).length) {
          const adjust = new HandlerArea(
            switchAdjusent(self._testedTiles, self._area),
            self._tiles,
            self._testedTiles
          );
          self._area = { ...adjust.fillHashTiles(), ...self._area };
          self._testedTiles = { ...adjust.setTestedTile(), ...self._testedTiles };

          self._counter = self._counter + 1;
        }

        //console.log(self._area);

        function burning(toBurn) {
          for (let tile in toBurn) {
            console.log(tile);
            self._tileControl.burnTile(toBurn[tile]);
          }
        }

        //Burn if the area consists of more than 1 of the same type of tile
        if (self._counter !== 1) {
          burning(self._area);
        }

        //self._area = cc.FadeOut(2)

        return false;
      },
    });
    cc.eventManager.addListener(listener, this);
  }

  static getTiles(sizeRowGameField, numOfColors) {
    let tiles = [];
    let tile = {};
    for (let i = 1; i <= sizeRowGameField; i++) {
      const numRow = i;
      for (let k = 1; k <= sizeRowGameField; k++) {
        const x = 389;
        const y = Main.createRow(numRow);
        const adressColumnByX = Main.createColumn(x, sizeRowGameField);

        const randomNum = getRandomNum(numOfColors);

        tile = new Tile(randomNum, new DynamicSprite());
        tile._shape.x = adressColumnByX[k - 1];
        tile._shape.y = y;

        tiles.push(tile._shape);
      }
    }
    return tiles;
  }

  static createRow(numRow) {
    return renderRow(numRow);
  }

  static createColumn(numX, numRows) {
    return fillRowWithTitles(numX, numRows);
  }

  static renderTiles(tiles) {
    for (let tiel of tiles) {
      this.addChild(tiel._shape);
    }
  }
}

export default Main = Main;
