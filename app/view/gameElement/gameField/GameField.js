import path from '../../../storage';

class GameField {
  _field = null;

  constructor(frame) {
    this._field = frame.createSprite(path.GAME_FIELD, { posWidth: 2.3, posHeight: 2.5 }, 0.3);
  }
}

export default GameField = GameField;
