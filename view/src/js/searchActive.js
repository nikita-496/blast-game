const { gameState } = require('./gameManager');
const { checkAdjacent, defineAdjacent } = require('./searchAdjacent');
const visualizer = require('./visualizer');

function serachActive(ctx, fieldWithTails) {
  gameState.checkedTails = [...gameState.checkedTails, gameState.activeTail];
  visualizer.markClickedTail(ctx);
  checkAdjacent(defineAdjacent(), fieldWithTails);
  console.log('checked', gameState.checkedTails)
}

module.exports = serachActive;
