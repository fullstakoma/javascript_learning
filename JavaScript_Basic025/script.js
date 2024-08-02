"use strict";
// Basic of Dates
const nowDate = new Date();
console.log(nowDate);
console.log(Date.now());

console.log(new Date("Aug 02 2024 18:28:41"));
console.log(new Date("Aug 24, 2015"));
console.log(new Date(2023, 8, 2, 18, 29, 5));
console.log(new Date(2023, 8, 24));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates
const futureDate = new Date(2035, 8, 2, 18, 30);
console.log(futureDate);
console.log(futureDate.getFullYear);
console.log(futureDate.getMonth);
console.log(futureDate.getDate);
console.log(futureDate.getDay);
console.log(futureDate.getHours);
console.log(futureDate.getMinutes);
console.log(futureDate.getSeconds);
console.log(futureDate.toISOString);

console.log(new Date(2142256980000));

futureDate.setFullYear(2040);
console.log(futureDate);

const farFutureDate = new Date(2192, 12, 25, 16, 30);
console.log(+farFutureDate);

const calcDaysPassed = (date_1, date_2) =>
  Math.abs(date_2 - date_1) / (1000 * 60 * 60 * 24);

console.log(calcDaysPassed(new Date(2035, 3, 4), new Date(2035, 8, 2)));

// Internationalizing Date
const nowTime = new Date();

const timeUS = new Intl.DateTimeFormat("en-US").format(nowTime);
const timeJP = new Intl.DateTimeFormat("ja-JP").format(nowTime);

console.log(timeUS);
console.log(timeJP);

//Timer

setTimeout(() => console.log("ほらよ。ピザだ🍕"), 3000);
console.log("3秒後にピザを与えてやろう🍕");

const pizzaIngredients = ["ペペロニ", "カマンベールチーズ"];
const pizzTimer = setTimeout(
  (ing_1, ing_2) => console.log(`${ing_1}と${ing_2}のピザだよ！🍕`),
  3000,
  ...pizzaIngredients
);

console.log(`ピザを3秒後にお届けするよ🍕`);

if (pizzaIngredients.includes("ブルーチーズ")) clearTimeout(pizzTimer);
