"use strict";

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`ベンチプレスを${rep}回できたぞ！🏋️`);
}

//functionとの組み合わせその1
const americanNames = [
  "James",
  "Emma",
  "William",
  "Olivia",
  "Liam",
  "Ava",
  "Noah",
  "Isabella",
  "Mason",
  "Sophia",
];

const type_americanNames = [];

for (let i = 0; i < americanNames.length; i++) {
  console.log(americanNames[i], typeof americanNames[i]);
  type_americanNames.push(typeof americanNames[i]);
}

console.log(americanNames);
console.log(type_americanNames);

//functionとの組み合わせその2
const birthYears = [1996, 2000, 1982, 1980, 1991, 1996, 1998, 1999, 1981, 1995];
const calcAge = [];
const currentYear = 2024;

for (let i = 0; i < birthYears.length; i++) {
  calcAge.push(currentYear - birthYears[i]);
}

console.log(birthYears);
console.log(calcAge);

const mixedData = [
  50,
  "Mason",
  25,
  "Emma",
  18,
  "William",
  24,
  "Olivia",
  18,
  "Ava",
  19,
];

// Continueの活用
for (let i = 0; i < mixedData.length; i++) {
  if (typeof mixedData[i] !== "string") continue;
  console.log(mixedData[i], typeof mixedData[i]);
}
// Breakの活用
for (let i = 0; i < mixedData.length; i++) {
  if (typeof mixedData[i] === "number") break;
  console.log(mixedData[i], typeof mixedData[i]);
}

//逆の場合
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// loopの中にloop

const trainingMenu = [
  "ベンチプレス",
  "スクワット",
  "デッドリフト",
  "ランニング",
];

for (let exercise = 0; exercise < trainingMenu.length; exercise++) {
  console.log(`これからやる運動は${trainingMenu[exercise]}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`今、${trainingMenu[exercise]}を${rep}回やったよ`);
  }
}

//while loop

let rep = 1;
while (rep <= 10) {
  console.log(`ベンチプレスを${rep}回できたぞ！🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`振ったサイコロの目は${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`${dice}が出たので終了`);
}
