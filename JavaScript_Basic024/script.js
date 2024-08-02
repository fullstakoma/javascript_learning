"use strict";

console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log(Number("23"));
console.log(+"23");

console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("f22", 10));

console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseInt("2.5rem"));

//check if it is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20"));
console.log(Number.isNaN(20 / 0));

//check if it is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20"));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger("20"));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(5, 15, 4, 23, 4));
console.log(Math.max(5, 15, 4, "23", 4));
console.log(Math.max(5, 15, 4, "23px", 4));
console.log(Math.min(5, 15, 4, 23, 4));

console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//rounding Intiger
console.log(Math.round(20.3));
console.log(Math.round(20.9));
console.log(Math.ceil(20.3));
console.log(Math.ceil(20.9));
console.log(Math.floor(20.3));
console.log(Math.floor("20.3"));
console.log(Math.trunc(20.3));
console.log(Math.trunc(-20.3));
console.log(Math.floor(-20.3));

// rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// Remainder
console.log(5 % 2);
console.log(5 / 2);
console.log(6 % 2);
console.log(6 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
//separator
const diameterPositions = 100_000_000;
console.log(diameterPositions);
const piNumber = 3.1415;
console.log(piNumber);
console.log(Number("100_000_000"));
console.log(parseInt("100_000_000"));

//Unsafe Number
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

//Big Integer
console.log(8236789206826896892360489268968928964892);
console.log(8236789206826896892360489268968928964892n);
console.log(BigInt(8738972987));

console.log(10000000n + 10000000n);
console.log(24928094809289048920n * 891797412173897n);
const hugeNumber = 19038919037109709n;
const justANumber = 23;
console.log(hugeNumber + BigInt(justANumber));

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n === "20");
console.log(20n == "20");
console.log(hugeNumber + "はとても大きい数字");
console.log(11n / 3n);
console.log(11 / 3);

//Internationalization
const numOriginal = 8290823020;
console.log("US: ", new Intl.NumberFormat("en-US").format(numOriginal));
console.log(
  "中国: ",
  new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(numOriginal)
);
