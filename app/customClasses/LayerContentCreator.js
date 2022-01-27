class LayerContentСreater extends cc.Layer {
  _element = null;
  _position = null;
  _scale = null;

  constructor(type, path, text) {
    super();
    this._type = type;
    this._source = path;
    this._text = text;
  }

  createElement() {
    if (this._type === 'sprite') {
      return (this._element = cc.Sprite.create(this._source));
    } else if (this._type === 'label') {
      return (this._element = cc.LabelTTF.create(
        this._text.content,
        this._text.fontFamaly,
        this._text.fontSize
      ));
    }
    throw new Error('Invalid item type. The type must be either a "sprite" or a "label"');
  }

  // parameters symbolizes how many times to change the position of the element relative to the game scene
  set position(value) {
    const size = cc.director.getWinSize();
    this._positionElement = this._element.setPosition(
      size.width / value.posWidth,
      size.height / value.posHeight
    );
  }
  set scale(value) {
    this._scaleElement = this._element.setScale(value);
  }
}

export default LayerContentСreater = LayerContentСreater;
