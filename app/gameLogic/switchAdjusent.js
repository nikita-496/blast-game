const switchAdjusent = (noSwitch, adjusent) => {
  let newActiveTiles = null;
  for (const key in adjusent) {
    if (Object.keys(noSwitch).includes(String(key))) continue;
    newActiveTiles = adjusent[key];
    break;
  }
  return newActiveTiles;
};

export default switchAdjusent;
