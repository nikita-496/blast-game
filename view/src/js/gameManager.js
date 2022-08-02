const gameSettings = {
  tails: {
    types: {
      1: 'RED',
      2: 'BLUE',
      3: 'GREEN',
      4: 'YELLOW',
      5: 'PURPLE',
    },
    sizeTail: {
      width: 100,
      height: 100,
    },
  },
  field: {
    size: 4,
  }
};

const gameState = {
  activeTail: null,
  coordTails: {},
  typeTails: [],
  sameType: [],
  checkedTails: [],

  updateActiveTail() {

  }
}

module.exports = {gameSettings, gameState};
