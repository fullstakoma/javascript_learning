"use strict";
const myName = "Tanaka";
const myJob = "Teacher";
const birthYear = 1980;
const currentYear = 2024;

console.log(
  `Hi my name is ${myName}, I'm currently ${
    currentYear - birthYear
  }. I work as ${myJob}`
);

console.log(`こんな感じで
    改行
    できるよ`);

const inputNumber = "2000";
console.log(Number(inputNumber), inputNumber);
console.log(typeof Number(inputNumber), typeof inputNumber);
console.log(Number(inputNumber) + 1000, inputNumber + 1000);

const inputString = "Tacos";
console.log(Number(inputString));
console.log(typeof Number(inputString));

const inputValue = 1000;
console.log(String(inputValue));
console.log(typeof String(inputValue));

console.log("100" + 10 + 10);
console.log("100" - 10 - 10);
console.log("100" * 10 * 10);
console.log("100" / 10 / 10);
