import { fillRowWithTitles } from '../../../src/js/utilitsOfView/gameElement/fillRowWithTitles';
import { getRandomNum } from '../../../src/js/utilitsOfView/gameElement/getRandomNum';
import { renderRow } from '../../../src/js/utilitsOfView/gameElement/renderRowField';

import DynamicSprite from '../../interface/DynamicSprite';
import staticSprite from '../../interface/staticSprite';
import GameField from '../gameElement/gameField/GameField';
import Tile from '../gameElement/tiles/Tile';

class Main extends cc.Layer {
  constructor() {
    super();
    this._gameField = new GameField(new staticSprite());
    this._tiles = Main.getTiles(9, 4);

    this.init();
  }
  init() {
    this.addChild(this._gameField._field);

    for (let tile of this._tiles) {
      this.addChild(tile, 100);
    }
  }

  static getTiles(sizeRowGameField, numOfColors) {
    let tiles = [];
    let tile = [];
    for (let i = 1; i <= sizeRowGameField; i++) {
      const numRow = i;
      for (let k = 1; k <= sizeRowGameField; k++) {
        const x = 805;
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
