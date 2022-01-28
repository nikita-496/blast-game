import staticSprite from '../../interface/staticSprite';
import path from '../../storage';

class Achaivments {
  _mainframe = null;
  _stepFrame = null;
  _currentScoreFrame = null;
  _gaolScoreFrame = null;

  _stepScoreValue = null;
  _currentScoreTitle = null;
  _currentScoreValue = null;
  _goalScoreTitle = null;
  _goalScoreVlue = null;

  constructor(frame, step, score) {
    this._mainFrame = frame.createSprite(
      path.ACHAIVMENTS_FRAME,
      { posWidth: 1.2, posHeight: 2 },
      0.35
    );

    this._stepFrame = step.createStaticSprite(path.BALL, { posWidth: 1.2, posHeight: 1.6 }, 0.3);
    this._stepScoreValue = step.createDynamicLabel('37', 'Arial', 40, {
      posWidth: 1.2,
      posHeight: 1.6,
    });

    this._currentScoreFrame = score.createStaticSprite(
      path.SCORE_FRAME,
      { posWidth: 1.2, posHeight: 2.25 },
      0.25
    );
    this._currentScoreTitle = score.createStaticLabel('Очки:', 'Arial', 40, {
      posWidth: 1.2,
      posHeight: 2.2,
    });
    this._currentScoreValue = score.createStaticLabel('221', 'Arial', 40, {
      posWidth: 1.2,
      posHeight: 2.45,
    });

    this._gaolScoreFrame = score.createStaticSprite(
      path.SCORE_FRAME,
      { posWidth: 1.2, posHeight: 3.1 },
      0.25
    );
    this._goalScoreTitle = score.createStaticLabel('Цель:', 'Arial', 40, {
      posWidth: 1.2,
      posHeight: 3,
    });
    this._goalScoreVlue = score.createStaticLabel('360', 'Arial', 40, {
      posWidth: 1.2,
      posHeight: 3.6,
    });
  }
}

export default Achaivments = Achaivments;
