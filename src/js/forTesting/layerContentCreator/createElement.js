const createElement = (type) => {
  let element = null;
  if (type === 'sprite') {
    return (element = 'Sprite create');
  } else if (type === 'label') {
    return (element = 'Label create');
  }
  throw new Error('Invalid item type. The type must be either a "sprite" or a "label"');
};

module.exports.createElement = createElement;
