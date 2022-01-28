import StaticLabel from '../../../interface/StaticLabel';
import Counter from './Counter';

class CounterWithTitle extends Counter {
  _titlElement = null;
  constructor() {
    super();
    this._titlElement = new StaticLabel();
  }

  createStaticLabel(text, fontFamaly, fontSize, position) {
    return this._titlElement.createLabel(text, fontFamaly, fontSize, position);
  }
}

export default CounterWithTitle = CounterWithTitle;
