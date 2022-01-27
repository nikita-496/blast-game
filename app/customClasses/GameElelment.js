import LayerContentCreator from './LayerContentCreator';

class GameElelment extends LayerContentCreator {
  constructor(type, path, text, valuePosition, valueScale) {
    super(type, path, text);
    this.createElement();
    this.position = valuePosition;
    this.scale = valueScale;
  }
}

export default GameElelment = GameElelment;
