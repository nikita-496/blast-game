const checkTiles = (active, adjusents) =>
  adjusents.filter((adjusent) => adjusent._type === active._type);

export default checkTiles;
