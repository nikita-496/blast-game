class DynamicSprite {
  createSprite(url, value, scale) {
    const size = cc.director.getWinSize();
    let sprite = cc.Sprite.create(url);
    sprite.setPosition(size.width / value.posWidth, size.height / value.posHeight);
    sprite.setScale(scale);
    return sprite;
  }

  createTileSprite(url, scale) {
    let sprite = cc.Sprite.create(url);
    sprite.setScale(scale);
    return sprite;
  }
}
export default DynamicSprite = DynamicSprite;
