const { value } = require('../../../../app/manager');

const collectAdjacentCoords = (xCoorddActiveTile, yCoordActive) => {
  const xОffset = value.xОffset;
  const yOffset = value.yOffset;

  //the search area is in the shape of a cross
  const cross = 4;

  //top movement clockwise
  let adjacents = {};
  for (let i = 1; i <= cross; i++) {
    //let coords = [];

    if (i === 1) {
      adjacents[i] = `${xCoorddActiveTile}, ${yCoordActive + yOffset}`;
      /* //by x
      coords[0] = xCoorddActiveTile;
      //by y
      coords[1] = yCoordActive + yOffset;*/
    }

    if (i === 2) {
      adjacents[i] = `${xCoorddActiveTile + xОffset}, ${yCoordActive}`;
      /* coords[0] = xCoorddActiveTile + xОffset;
      coords[1] = yCoordActive;*/
    }

    if (i === 3) {
      adjacents[i] = `${xCoorddActiveTile}, ${yCoordActive - yOffset}`;
      /* coords[0] = xCoorddActiveTile;
      coords[1] = yCoordActive - yOffset;*/
    }

    if (i === 4) {
      adjacents[i] = `${xCoorddActiveTile - xОffset}, ${yCoordActive}`;
      /* coords[0] = xCoorddActiveTile - xОffset;
      coords[1] = yCoordActive;*/
    }
  }
  //Object.values(adjacents);
  return adjacents;
};
console.log(collectAdjacentCoords(4, 2));
module.exports.collectAdjacentCoords = collectAdjacentCoords;
