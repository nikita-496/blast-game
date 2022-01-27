import path from '../../storage';

import Level from './level/Level';

class Header extends cc.Layer {
  constructor() {
    super();
    this._levelLabel = new Level('label', undefined, {
      content: 'Уровень',
      fontFamaly: 'Arial',
      fontSize: 60,
    });
    this._spriteLabael = new Level('sprite', path.LEVEL_FRAME, undefined);
    this.init();
  }
  init() {
    this.addChild(this._levelLabel._element);
    this.addChild(this._spriteLabael._element);
  }
}

export default Header = Header;
