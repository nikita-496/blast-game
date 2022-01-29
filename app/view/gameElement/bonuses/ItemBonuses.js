import staticSprite from '../../../interface/staticSprite';
import path from '../../../storage';
import Counter from '../counter/Counter';

class ItemBonuses {
  _frame = null;
  _bonuseCounterFrame = null;
  _bonusesCounterValue = null;
  _counterDecoration = null;

  _counter = null;
  _staticSprite = null;

  constructor(width, counterValue) {
    this._staticSprite = new staticSprite();
    this._frame = this._staticSprite.createSprite(
      path.BONUSE_FRAME,
      { posWidth: width, posHeight: 11 },
      0.3
    );
    this._counter = new Counter();
    this._bonuseCounterFrame = this._counter.createStaticSprite(
      path.BONUSE_ITEM_COUNTER_FRAME,
      { posWidth: width, posHeight: 15 },
      0.3
    );
    this._bonusesCounterValue = this._counter.createDynamicLabel(counterValue, 'Arial', 20, {
      posWidth: width,
      posHeight: 15,
    });
    this._counterDecoration = this._counter.createStaticSprite(
      path.CIRCLE_GRAY,
      {
        posWidth: width,
        posHeight: 15,
      },
      0.25
    );
  }
}

export default ItemBonuses = ItemBonuses;
