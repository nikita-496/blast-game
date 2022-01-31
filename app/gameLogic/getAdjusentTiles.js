const getAdjusentTiles = (tiles, adjusents, tested) => {
  const adjusentTiles = tiles.filter((tile) => {
    const transformedTile = transformToStr(tile._position);
    return transformToArrCoords(adjusents).includes(transformedTile);
  });
  if (!tested) {
    return adjusentTiles;
  }
  const withouTested = adjusentTiles.filter((adjusent) => {
    return !Object.keys(tested).includes(String(adjusent.__instanceId));
  });
  return withouTested;
};

const transformToStr = (object) => {
  const a = Object.values(object);
  return a.join(', ');
};

const transformToArrCoords = (object) => {
  const coordaAjusents = [];
  for (let coord in object) {
    coordaAjusents.push(object[coord]);
  }
  return coordaAjusents;
};

export default getAdjusentTiles;
