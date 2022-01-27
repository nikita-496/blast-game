class LayerContentСreater extends cc.Layer {
  _element = null;
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
}

export default LayerContentСreater = LayerContentСreater;
