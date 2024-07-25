"use strict";
console.log(34);
console.log("Yamada Taro");

/*String */
let nickName = "Johnny";

/*Number type*/
let numberOfPeople = 34;

/*Boolean */
let ageRestrict = true;
/*Undefined */
let numberOfGhosts;

console.log(typeof 32);
console.log(typeof "Tony");

let myName = "Tanaka";
console.log(myName);
myName = "Ito";
console.log(myName);
myName = "Sato";
console.log(myName);

const yourName = "Kenny";
console.log(yourName);
/*yourName = "Johhny"; */

var yourJob = "Programmer";
console.log(yourJob);
yourJob = "Fire Fighter";
console.log(yourJob);

const baseValue = 5;
const calcOne = baseValue - 2;
const calcTwo = baseValue + 2;

console.log(calcOne, calcTwo);
console.log(calcTwo * 2, calcTwo / 2, calcTwo ** 2);

const firstName = "Taro";
const lastName = "Tanaka";
console.log(firstName + " " + lastName);

let x = 10 + 10;
console.log(x);
x += 10;
console.log(x);
x -= 10;
console.log(x);
x *= 10;
console.log(x);
x /= 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

console.log(calcOne > calcTwo);
console.log(calcOne >= calcTwo);
console.log(calcOne - 10 > calcTwo - 10);

const averageCalcFalse = calcOne + calcTwo / 2;
console.log(calcOne, calcTwo, averageCalcFalse);
const averageCalcTrue = (calcOne + calcTwo) / 2;
console.log(calcOne, calcTwo, averageCalcTrue);
