"use strict";
const friendList = ["John", "Kenny", "Roger", "Mike"];
const numList = [1, 2, 3, 4, 5];
const newfriendList = new Array("John", "Kenny", "Roger", "Mike");

console.log(friendList);
console.log(numList);
console.log(newfriendList);

console.log(friendList[0]);
console.log(friendList[2]);
console.log(friendList.length);
console.log(friendList[friendList.length - 1]);

//友達を入れ替える
friendList[2] = "Tony";
console.log(friendList);

//Arrayには様々なデータを入れる事ができる。

const currentYear = 2024;
const birthYear = 1970;
const retirementAge = 65;

const calcRetirement = function (inputCurrentYear, inputBirthYear) {
  const retirementYear = birthYear + retirementAge - currentYear;
  return `あと${retirementYear}年働きます`;
};

const myData = [
  "田中太郎",
  `${currentYear - birthYear}歳`,
  1234567,
  friendList,
  calcRetirement(currentYear, birthYear),
];

console.log(myData);

// Arrayの制御
const pokemonCollection = ["ピカチュウ", "カイリュー", "ヤドラン", "ピジョン"];
console.log(pokemonCollection);
//加える
pokemonCollection.push("コダック");
console.log(pokemonCollection);
pokemonCollection.unshift("コラッタ");
console.log(pokemonCollection);
//外す
pokemonCollection.pop();
console.log(pokemonCollection);
pokemonCollection.shift();
console.log(pokemonCollection);
//検索する
console.log(pokemonCollection.indexOf("ピカチュウ"));
console.log(pokemonCollection.indexOf("ライチュウ"));
console.log(pokemonCollection.includes("ピカチュウ"));
console.log(pokemonCollection.includes("ライチュウ"));

//if文と機能との組み合わせ
const numberArray = [1, 2, 3, 4, 5, 6, 7];
const chosenNumber = 7;
function announceLuckyNumber(inputNumber) {
  const luckyNumber =
    String(inputNumber) + String(inputNumber) + String(inputNumber);
  return console.log(
    `あなたのラッキーナンバーは${luckyNumber}。今日は良いことがありそう`
  );
}

numberArray.includes(chosenNumber)
  ? announceLuckyNumber(chosenNumber)
  : numberArray.push(chosenNumber);

console.log(numberArray);
