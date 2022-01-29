class StaticLabel {
  createLabel(text, fontFamaly, fontSize, value) {
    const size = cc.director.getWinSize();
    let label = cc.LabelTTF.create(text, fontFamaly, fontSize);
    label.setPosition(size.width / value.posWidth, size.height / value.posHeight);
    return label;
  }
}
export default StaticLabel = StaticLabel;
