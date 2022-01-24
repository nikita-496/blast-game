/*import '../styles/main.css';*/

/*const GameLayer = cc.Layer.extend({
  ctor() {
    this._super();
    this.init();
  },
  init() {
    this._super();
    const size = cc.director.getWinSize();
    const sprite = cc.Sprite.create('images/HelloWorld.png');
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(0.8);
    this.addChild(sprite, 0);
    const label = cc.LabelTTF.create('Hello World', 'Arial', 40);
    label.setPosition(size.width / 2, size.height / 2);
    this.addChild(label, 1);
  },
  onEnter() {
    this._super();
  },
});*/
class GameLayer extends cc.Layer {
  ctor() {
    this._super();
    this.init();
  }
  init() {
    this._super();
    const size = cc.director.getWinSize();
    const sprite = cc.Sprite.create('../images/HelloWorld.png');
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(0.8);
    this.addChild(sprite, 0);
    const label = cc.LabelTTF.create('Hello World', 'Arial', 40);
    label.setPosition(size.width / 2, size.height / 2);
    this.addChild(label, 1);
  }
  onEnter() {
    this._super();
  }
}

GameLayer.scene = function (params) {
  const scene = new cc.Scene();
  const layer = new GameLayer();
  scene.addChild(layer);
  return scene;
};

window.onload = function () {
  cc.game.onStart = function () {
    //load resources
    cc.LoaderScene.preload(
      ['images/HelloWorld.png'],
      function () {
        cc.director.runScene(GameLayer.scene());
      },
      this
    );
  };
  cc.game.run('gameCanvas');
};
