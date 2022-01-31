const { value } = require('../manager');

const collectAdjacentCoords = (xCoorddActiveTile, yCoordActive) => {
  const xОffset = value.xОffset;
  const yOffset = value.yOffset;

  //the search area is in the shape of a cross
  const cross = 4;

  //top movement clockwise
  let adjacents = {};

  for (let i = 1; i <= cross; i++) {
    if (i === 1) {
      adjacents[i] = `${xCoorddActiveTile}, ${yCoordActive + yOffset}`;
    }
    if (i === 2) {
      adjacents[i] = `${xCoorddActiveTile + xОffset}, ${yCoordActive}`;
    }

    if (i === 3) {
      adjacents[i] = `${xCoorddActiveTile}, ${yCoordActive - yOffset}`;
    }

    if (i === 4) {
      adjacents[i] = `${xCoorddActiveTile - xОffset}, ${yCoordActive}`;
    }
  }
  return adjacents;
};

export default collectAdjacentCoords;
