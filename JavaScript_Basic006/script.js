"use strict";

/*funtionの基本*/
function callText() {
  console.log("Wake up time!");
}
callText();
/*10を入れても変化しない */
callText(10);

/* returnの結果を表示*/

function fruitProcessor(apple, orrange) {
  console.log(apple, orrange);
  const fruitJuice = `私は${apple}つのリンゴ🍎と${orrange}つのオレンジ🍊を使ってフルーツジュースを作った`;
  return fruitJuice;
}

const fruitJuiceResult = fruitProcessor(5, 1);

console.log(fruitJuiceResult);
console.log(fruitProcessor(3, 2));

fruitProcessor(7, 8);
console.log(fruitJuiceResult);

//funtionの表し方
//Function Decolation
function calcNumber_1(number) {
  return number * 2;
}
//Function Expression
const calcNumber_2 = function (number) {
  return number * 2;
};

//Arrow Expression
const calcNumber_3 = (number) => number * 2;

const number_1 = calcNumber_1(10);
const number_2 = calcNumber_2(10);
const number_3 = calcNumber_3(10);

console.log(number_1, number_2, number_3);

// Arrow Expressionであっても複数処理がある場合、returnを使わないといけない。

const retirementAge = 65;
const currentYear = 2024;
const yearofRetirement = (birthYear, firstname) => {
  const yearsLeft = birthYear + retirementAge - currentYear;
  return `${firstname}さんは定年退職まであと${yearsLeft}年働かないといけないよ。ガンバ。`;
};

console.log(yearofRetirement(1989, "ケンタ"));
console.log(yearofRetirement(2001, "太郎"));

//functionから違うfunctionを呼ぶ方法
function interestCalc(japaneseYen) {
  return japaneseYen * 1.01;
}

function bankAccount(balance) {
  const futureBalance = interestCalc(balance);
  return `あなたの預金${balance}円は金利${
    futureBalance / balance
  }%のおかげで${futureBalance}円になりました。よかったね。`;
}

console.log(bankAccount(1000));
console.log(bankAccount(100000000));
