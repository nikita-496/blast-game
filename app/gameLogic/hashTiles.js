const createHashTiles = (sameTypeTiles, i, mainActive) => {
  const hash = {};
  if (i === null) {
    hash[mainActive.__instanceId] = mainActive;
    for (let tile of sameTypeTiles) {
      hash[tile.__instanceId] = tile;
    }
    return hash;
  }
  for (let tile of sameTypeTiles) {
    if (Object.keys(i).includes(String(tile.__instanceId))) continue;
  }

  console.log(hash);
  return hash;
};
export default createHashTiles;
