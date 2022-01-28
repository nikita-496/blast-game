import Achaivments from '../gameElement/Achaivments';
import ItemBonuses from '../gameElement/bonuses/ItemBonuses';
import Counter from '../gameElement/counter/Counter';
import CounterWithTitle from '../gameElement/counter/CounterWithTitle';
import staticSprite from '../../interface/staticSprite';

class Aside extends cc.Layer {
  constructor() {
    super();
    this._achaivments = new Achaivments(new staticSprite(), new Counter(), new CounterWithTitle());
    this._firstBonuses = new ItemBonuses(1.35, 5);
    this._secondBonuses = new ItemBonuses(1.2, 3);
    this._thirdBonuses = new ItemBonuses(1.08, 15);
    this.init();
  }
  init() {
    this.addChild(this._achaivments._mainFrame);
    this.addChild(this._achaivments._stepFrame);
    this.addChild(this._achaivments._stepScoreValue);
    this.addChild(this._achaivments._currentScoreFrame);
    this.addChild(this._achaivments._currentScoreTitle);
    this.addChild(this._achaivments._currentScoreValue);
    this.addChild(this._achaivments._gaolScoreFrame);
    this.addChild(this._achaivments._goalScoreTitle);
    this.addChild(this._achaivments._goalScoreVlue);

    this.addChild(this._firstBonuses._frame);
    this.addChild(this._firstBonuses._bonuseCounterFrame);
    this.addChild(this._firstBonuses._bonusesCounterValue);
    this.addChild(this._firstBonuses._counterDecoration);

    this.addChild(this._secondBonuses._frame);
    this.addChild(this._secondBonuses._bonuseCounterFrame);
    this.addChild(this._secondBonuses._bonusesCounterValue);
    this.addChild(this._secondBonuses._counterDecoration);

    this.addChild(this._thirdBonuses._frame);
    this.addChild(this._thirdBonuses._bonuseCounterFrame);
    this.addChild(this._thirdBonuses._bonusesCounterValue);
    this.addChild(this._thirdBonuses._counterDecoration);
  }
}

export default Aside = Aside;
