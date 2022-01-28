import path from '../../storage';

import CounterWithTitle from '../../customClasses/gameElement/counter/CounterWithTitle';
import ProgressBar from '../../customClasses/gameElement/progressBar/ProgressBar';
class Header extends cc.Layer {
  constructor() {
    super();
    this._level = new CounterWithTitle();
    this._progressBar = new ProgressBar();
    this._amountScore = new CounterWithTitle();
    this.init();
  }
  init() {
    this.addChild(
      this._level.createStaticLabel('Уровень', 'Arial', 40, { posWidth: 8, posHeight: 1.05 }, 0.5)
    );
    this.addChild(
      this._level.createStaticSprite(path.LEVEL_FRAME, { posWidth: 8, posHeight: 1.15 }, 0.4)
    );
    this.addChild(
      this._level.createStaticSprite(path.CIRCLE_GRAY, { posWidth: 10.9, posHeight: 1.149 }, 0.36),
      1
    );
    this.addChild(
      this._level.createStaticSprite(
        path.HIGHT_LIGHT_DECORATION,
        { posWidth: 6, posHeight: 1.13 },
        0.36
      )
    );
    this.addChild(
      this._level.createDynamicLabel('2', 'Arial', 20, { posWidth: 8, posHeight: 1.15 }, 0.5),
      1
    );

    //progress
    this.addChild(this._progressBar._frame);
    this.addChild(this._progressBar._title);
    this.addChild(this._progressBar._progressScale);
    this.addChild(this._progressBar._progressLine);

    //amount
    this.addChild(
      this._amountScore.createDynamicLabel(
        'Всего очков',
        'Arial',
        40,
        { posWidth: 1.4, posHeight: 1.05 },
        0.5
      )
    );
    this.addChild(
      this._amountScore.createStaticSprite(
        path.LEVEL_FRAME,
        { posWidth: 1.4, posHeight: 1.15 },
        0.4
      )
    );
    this.addChild(
      this._amountScore.createStaticSprite(
        path.CIRCLE_GRAY,
        { posWidth: 1.465, posHeight: 1.148 },
        0.36
      ),
      1
    );
    this.addChild(
      this._amountScore.createStaticSprite(
        path.HIGHT_LIGHT_DECORATION,
        { posWidth: 1.32, posHeight: 1.13 },
        0.36
      ),
      1
    );
    this.addChild(
      this._amountScore.createDynamicLabel(
        '6478',
        'Arial',
        20,
        { posWidth: 1.37, posHeight: 1.15 },
        0.5
      ),
      1
    );
    this.addChild(
      this._amountScore.createStaticSprite(
        path.PLUS_FRAME,
        { posWidth: 1.25, posHeight: 1.15 },
        0.45
      )
    );
    this.addChild(
      this._amountScore.createStaticSprite(path.PLUS, { posWidth: 1.25, posHeight: 1.15 }, 0.45),
      1
    );

    //button
  }
}

export default Header = Header;
