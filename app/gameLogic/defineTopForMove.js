const defineForMove = (coordBornedArea, tiles) => {
  const coordTopArea = {};

  //keys
  const tileCoordX = [];

  const hash = {};

  for (let coord of coordBornedArea) {
    const arrCoord = transformToArr(coord);
    // console.log(arrCoord);

    tileCoordX.push(arrCoord[0]);
  }
  //фильтровать
  const filteredCoordX = tileCoordX.filter((x, pos) => tileCoordX.indexOf(x) == pos);

  //создать хеш, где ключ (ЗНАЧЕНИЕ ПО X), а значение объект координа (x, y) клетки, где раньше был тайл
  for (let i = 0; i < filteredCoordX.length; i++) {
    for (let coord of coordBornedArea) {
      const arr = [];
      arr.push(coord);
      if (coord.x === filteredCoordX[i]) {
        //имееется уже значение
        hash[filteredCoordX[i]]
          ? hash[filteredCoordX[i]].push(coord) //добавить объект координат как элемент массива
          : (hash[filteredCoordX[i]] = arr);
      }
    }
  }

  //среди всех координат по оси x найти самую высокую (она будет большей по сумме x и y)
  //проверить хеш
  const coordByY = {};
  let hashManyY = [];
  let keyManyY = null;

  for (let key in hash) {
    for (let item of hash[key]) {
      // console.log(item);
      if (hash[key].length === 1) {
        coordByY[key] = item.y;
      } else {
        //coordByY[key] = item.y;
        keyManyY = key;
        hashManyY.push(item.y);
        //Сортировка в порядке убывания
        let maxValueY = hashManyY.sort(function compare(a, b) {
          if (a > b) {
            return -1;
          }
          if (a < b) {
            return 1;
          }
          return 0;
        });
        //получить наибольшое значение по Y
        coordByY[keyManyY] = maxValueY[0];
      }
    }
  }

  return coordByY;
};

const transformToArr = (object) => {
  const a = Object.values(object);
  return a;
  //return a.join(', ');
};

export default defineForMove;
