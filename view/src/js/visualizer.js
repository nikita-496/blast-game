const { gameSettings, gameState } = require('./gameManager');

function renderTail(ctx, field) {
  const copy = { ...visualizer._options };
  for (let i = 1, number = 1; i <= gameSettings.field.size; i++) {
    console.log(field);
    if (i > 1) {
      copy.coorY = copy.coorY + copy.offsetY;
    }

    ctx.fillStyle = field[number];
    ctx.fillRect(copy.coorX, copy.coorY, copy.height, copy.height);
    ctx.strokeRect(copy.coorX, copy.coorY, copy.height, copy.height);

    gameState.coordTails[number] = [copy.coorX, copy.coorY];
    gameState.typeTails = [...gameState.typeTails, field[number]];

    number++;
    number = drawCell(gameSettings.field.size - 1, number);
    copy.coorX = this._options.coorX;
  }

  function drawCell(length, number) {
    for (let i = 1; i <= length; i++) {
      copy.coorX = copy.coorX + copy.offsetX;

      ctx.fillStyle = field[number];
      ctx.fillRect(copy.coorX, copy.coorY, copy.width, copy.height);
      ctx.strokeRect(copy.coorX, copy.coorY, copy.width, copy.height);

      gameState.coordTails[number] = [copy.coorX, copy.coorY];
      gameState.typeTails = [...gameState.typeTails, field[number]];
      number++;
    }
    return number++;
  }
}

const visualizer = {
  _options: {
    coorX: 0,
    coorY: 0,
    offsetX: 100,
    offsetY: 100,
    width: 100,
    height: 100,
  },
  renderTail,
  markClickedTail(ctx) {
    const number = gameState.activeTail;
    const coord = gameState.coordTails[number];
    ctx.font = '24px serif';
    ctx.fillStyle = 'black';
    // АC - активный по клику, AN - активный сосед
    const label = gameState.checkedTails.length > 1 ? 'AN' : 'AC';
    ctx.fillText(label, coord[0] + 50, coord[1] + 50);
  },
};

module.exports = visualizer;
