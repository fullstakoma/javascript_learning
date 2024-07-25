"use strict";
const yourAge = 19;
if (yourAge >= 20) {
  console.log("お酒を飲んで大丈夫な年齢");
} else {
  const yearsLeft = yourAge - 19;
  console.log(`あと${yearsLeft}年でお酒が飲めるよ。我慢だね。`);
}

let currentCentury;
if (yourAge <= 2000) {
  let currentCentury = 20;
} else {
  let currentCentury = 21;
}

const hisAge = 15;
hisAge >= 20
  ? console.log("He can drink alcohol")
  : console.log("He can't drink alcohol");

textResult = hisAge >= 20 ? "can drink alcohol" : "can't drink alcohol";
console.log(`He ${textResult}`);
console.log(`He ${hisAge >= 20 ? "can drink alcohol" : "can't drink alcohol"}`);

// 不正な値
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("John"));
console.log(Boolean({}));

const moneyValueFalse = 0;
if (moneyValueFalse) {
  console.log("お金持ちだね");
} else {
  console.log("不正な値だね");
}
const moneyValueTrue = 100;
if (moneyValueTrue) {
  console.log("お金持ちだね");
} else {
  console.log("不正な値だね");
}
let numValue;
if (numValue) {
  console.log("値が指定されているね");
} else {
  console.log("値が指定されていないね");
}

let stringNumber = "20";
if (stringNumber === 20) {
  console.log("きちんと値が認識されたね");
} else {
  console.log("ごめん。値がわからん");
}
if (stringNumber == 20) {
  console.log("きちんと値が認識されたね");
} else {
  console.log("ごめん。値がわからん");
}
if ((stringNumber = 20)) {
  console.log("きちんと値が認識されたね");
} else {
  console.log("ごめん。値がわからん");
}

let stringToNumber = Number("20");
if (stringToNumber === 20) {
  console.log("きちんと値が認識されたね");
} else {
  console.log("ごめん。値がわからん");
}
if (stringToNumber == 20) {
  console.log("きちんと値が認識されたね");
} else {
  console.log("ごめん。値がわからん");
}
if ((stringToNumber = 20)) {
  console.log("きちんと値が認識されたね");
} else {
  console.log("ごめん。値がわからん");
}

let falseNumber = 30;
if (falseNumber !== 20) {
  console.log("20ではなくてよかった");
} else {
  console.log("20だった。");
}

const ingredientsCurryPowder = true;
let ingredientsCurryBeef = true;
let ingredientsCurryFish = false;
const ingredientsCurryOnion = false;

console.log(ingredientsCurryPowder && ingredientsCurryBeef);
console.log(ingredientsCurryPowder || ingredientsCurryBeef);
console.log(!ingredientsCurryPowder);
console.log(
  ingredientsCurryPowder && ingredientsCurryBeef && ingredientsCurryOnion
);
console.log(
  (ingredientsCurryPowder && ingredientsCurryBeef) || ingredientsCurryOnion
);

if (ingredientsCurryPowder && ingredientsCurryBeef) {
  console.log("ビーフカレーを作れる");
} else {
  console.log("ビーフカレー作れません");
}
if ((ingredientsCurryPowder && ingredientsCurryBeef) || !ingredientsCurryFish) {
  console.log("魚カレーではなく、ビーフカレーを作れる");
} else {
  console.log("ビーフカレーではなく、魚カレーになる");
}
ingredientsCurryFish = true;
ingredientsCurryBeef = false;
if ((ingredientsCurryPowder && ingredientsCurryBeef) || !ingredientsCurryFish) {
  console.log("魚カレーではなく、ビーフカレーを作れる");
} else {
  console.log("ビーフカレーではなく、魚カレーになる");
}

const dayOfTheWeek = "Monday";
switch (dayOfTheWeek) {
  case "Monday":
    console.log("週の始めです。頑張りましょう。");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("週の半ばです。まだ頑張りましょう。");
    break;
  case "Friday":
    console.log("もうすぐ週末です。あと少し！");
    break;
  case "Saturday":
  case "Sunday":
    console.log("週末です。ゆっくり休んでください。");
}
