import path from '../../../storage';

class Tile {
  _types = [path.RED_TILE, path.BLUE_TILE, path.YELLOW_TILE, path.GREEN_TILE, path.PURPLE_TILE];
  _shape = null;

  constructor(color, dynamicSprite) {
    this._shape = dynamicSprite.createTileSprite(this._types[color], 0.3);
  }
}

export default Tile = Tile;
