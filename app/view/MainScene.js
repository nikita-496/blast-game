class MainScene extends cc.Scene{
  onEnter () {
    const size = cc.director.getWinSize();
    const sprite = cc.Sprite.create("./assets/HelloWorld.png");
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(0.8);
    this.addChild(sprite, 0);

    const label = cc.LabelTTF.create("Hello World", "Arial", 40);
    label.setPosition(size.width / 2, size.height / 2);
    this.addChild(label, 1);
  }
}

export default MainScene;
