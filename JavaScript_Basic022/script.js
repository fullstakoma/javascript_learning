"use strict";

const moneyTransfer = [200, -100, 400, -1500, 2000, 400, -400];

//Map Method
const euroToUSD = 1.08;
const convertToUSD = moneyTransfer.map((mov) => mov * euroToUSD);

console.log(moneyTransfer);
console.log(convertToUSD);

const moneyTransferDescriptions = moneyTransfer.map(
  (mov, i) =>
    `Movement ${i + 1}: あなたは${Math.abs(mov)}円を${
      mov > 0 ? "振り込んだ" : "引き出した"
    }`
);

console.log(moneyTransferDescriptions);

//Filter Method
const depositFilter = moneyTransfer.filter((mov) => mov > 0);
const withdrawFilter = moneyTransfer.filter((mov) => mov < 0);

console.log(depositFilter);
console.log(withdrawFilter);

//Reduce Method
const balanceChecker = moneyTransfer.reduce((acc, cur) => acc + cur, 0);
console.log(balanceChecker);

const maximunBalance = moneyTransfer.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, moneyTransfer[0]);
console.log(maximunBalance);
