const { generateField } = require('../../../logic/rows');
const { defineTail } = require('./defineTai');
const { gameSettings, gameState } = require('./gameManager');
const searchActive = require('./searchActive');
const { checkSameType } = require('./searchAdjacent');
const { setTile } = require('./setTile');
const visualizer = require('./visualizer');

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function click(e) {
  const cellNumber = defineTail(e.offsetX, e.offsetY);
  gameState.activeTail = cellNumber
  searchActive(ctx, fieldWithTails)

  checkSameType(ctx, fieldWithTails, searchActive)
  console.log(gameState)
}

const initialField = generateField(gameSettings.field.size);

let fieldWithTails = {};
if (Object.values(initialField).every((cell) => cell === null)) {
  fieldWithTails = setTile(initialField);
}

visualizer.renderTail(ctx, fieldWithTails);


document.addEventListener('click', click);
