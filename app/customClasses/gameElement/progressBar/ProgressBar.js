import StaticLabel from '../../../interface/StaticLabel';
import staticSprite from '../../../interface/staticSprite';
import DynamicSprite from '../../../interface/DynamicSprite';

import path from '../../../storage';

class ProgressBar {
  _frame = null;
  _title = null;
  _progressScale = null;
  _progressLine = null;
  _staticSprite = null;
  _staticLabel = null;
  _dynamicSprite = null;

  constructor() {
    this._staticSprite = new staticSprite();
    this._staticLabel = new StaticLabel();
    this._dynamicSprite = new DynamicSprite();

    this._frame = this._staticSprite.createSprite(
      path.FRAME_PROGRESS_BAR,
      { posWidth: 2.3, posHeight: 1.1 },
      0.4
    );
    this._title = this._staticLabel.createLabel(
      'Прогресс',
      'Arial',
      40,
      { posWidth: 2.3, posHeight: 1.05 },
      0.5
    );
    this._progressScale = this._staticSprite.createSprite(
      path.SCALE_PROGRESS_BAR,
      { posWidth: 2.3, posHeight: 1.17 },
      0.4
    );
    this._progressLine = this._dynamicSprite.createSprite(
      path.LINE_PROGRESS_BAR,
      { posWidth: 2.8, posHeight: 1.165 },
      0.4
    );
  }
}

export default ProgressBar = ProgressBar;
