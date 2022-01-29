import staticSprite from '../../../interface/staticSprite';
import DynamicLabel from '../../../interface/DynamicLabel';

class Counter {
  _staticSprite = null;
  _dynamicLabel = null;

  constructor() {
    this._staticSprite = new staticSprite();
    this._dynamicLabel = new DynamicLabel();
  }

  //method delegation from an interface
  createDynamicLabel(text, fontFamaly, fontSize, position) {
    return this._dynamicLabel.createLabel(text, fontFamaly, fontSize, position);
  }

  createStaticSprite(url, position, score) {
    return this._staticSprite.createSprite(url, position, score);
  }
}

export default Counter = Counter;
