import staticSprite from '../../../interface/staticSprite';
import DynamicLabel from '../../../interface/DynamicLabel';

class Counter {
  _dynamicLabel = {};
  _counterElement = null;
  constructor() {
    this._wrapper = new staticSprite();
    this._counterElement = new DynamicLabel();
  }

  //method delegation from an interface
  createDynamicLabel(text, fontFamaly, fontSize, position) {
    return this._counterElement.createLabel(text, fontFamaly, fontSize, position);
  }

  createStaticSprite(url, position, score) {
    return this._wrapper.createSprite(url, position, score);
  }
}

export default Counter = Counter;
