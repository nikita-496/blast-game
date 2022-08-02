const { gameSettings, gameState } = require('./gameManager');

function defineAdjacent() {
  const numOfActiveTail = gameState.activeTail;
  // Без учета крайнх случаев
  const top = numOfActiveTail - gameSettings.field.size;
  const left = numOfActiveTail + 1;
  const bottom = numOfActiveTail + gameSettings.field.size;
  const right = numOfActiveTail - 1;
  let adjacent = [
    gameState.checkedTails.includes(top) ? null : top,
    gameState.checkedTails.includes(left) ? null : left,
    gameState.checkedTails.includes(bottom) ? null : bottom,
    gameState.checkedTails.includes(right) ? null : right,
  ];
  adjacent = adjacent.filter((tail) => tail);
  return adjacent;
}

function checkAdjacent(adjacents, fieldWithTails) {
  console.log('adjacent', adjacents);
  const typeOfActiveTail = fieldWithTails[gameState.activeTail];
  for (let adjacent in adjacents) {
    if (fieldWithTails[adjacents[adjacent]] === typeOfActiveTail) {
      gameState.sameType = [...gameState.sameType, adjacents[adjacent]];
    }
  }
}

function checkSameType(ctx, fieldWithTails, serachActive) {
  gameState.sameType.forEach((tail) => {
    console.log('tail', tail);
    gameState.activeTail = tail;
    serachActive(ctx, fieldWithTails);
    gameState.sameType.shift();
  });
  console.log('same', gameState.sameType);
  if (gameState.sameType.length) {
    checkSameType(ctx, fieldWithTails, serachActive);
  }
}

module.exports = { defineAdjacent, checkAdjacent, checkSameType };
