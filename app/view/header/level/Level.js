import LayerContentCreator from '../../../customClasses/LayerContentCreator';

class Level extends LayerContentCreator {
  constructor(type, path, text) {
    super(type, path, text);
    this.createElement();
  }
}

export default Level = Level;
