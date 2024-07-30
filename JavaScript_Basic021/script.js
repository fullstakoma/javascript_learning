"use strict";

let arraySample_1 = ["a", "b", "c", "d", "e"];
let arraySample_2 = ["f", "g", "h", "i", "j"];

//slice
console.log(arraySample_1);
console.log(arraySample_1.slice(2));
console.log(arraySample_1.slice(2, 4));
console.log(arraySample_1.slice(-2));
console.log(arraySample_1.slice(2, -1));
console.log([...arraySample_1]);

//splice
console.log(arraySample_1);
console.log(arraySample_1.splice(-1));
console.log(arraySample_1);
console.log(arraySample_1.splice(1, 2));
console.log(arraySample_1);

//reverse
console.log(arraySample_2);
console.log(arraySample_2.reverse());
console.log(arraySample_2);

//concat
const arrayConcat = arraySample_1.concat(arraySample_2);
console.log(arrayConcat);
console.log([...arraySample_1, ...arraySample_2]);

//join
console.log(arrayConcat.join("-"));

//at
const arraySample_3 = [11, 26, 57, 74];
console.log(arraySample_3[0]);
console.log(arraySample_3.at(0));
//最後の値を得る方法
console.log(arraySample_3[arraySample_3.length - 1]);
console.log(arraySample_3.slice(-1)[0]);
console.log(arraySample_3.at(-1));
//文字列にも必要
console.log("あゆみ".at(0));
console.log("あゆみ".at(-1));

//forEach
const arraySample_4 = [200, -400, -500, 800, -1200, 1800, 2300];
const mapSample_1 = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["JPY", "Japanese Yen"],
]);
const setSample_1 = new Set(["USD", "EUR", "USD", "JPY", "JPY"]);

//通常の書き方
for (const [i, arrayElement] of arraySample_4.entries()) {
  if (arrayElement > 0) {
    console.log(`Your movement ${i + 1} was ${arrayElement}`);
  } else {
    console.log(`You movement ${i + 1}  went back ${Math.abs(arrayElement)}`);
  }
}

//forEachで書いた場合
arraySample_4.forEach(function (arrayElement, i) {
  if (arrayElement > 0) {
    console.log(`Your movement ${i + 1} was ${arrayElement}`);
  } else {
    console.log(`You movement ${i + 1}  went back ${Math.abs(arrayElement)}`);
  }
});

//MapをforEach
mapSample_1.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SetをforEach
setSample_1.forEach(function (value, _, map) {
  console.log(`${value}`);
});
