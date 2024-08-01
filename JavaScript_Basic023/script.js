"use strict";

const moneyTransfer = [200, -100, 400, -1500, 2000, 400, -400];

//Map Method
const euroToUSD = 1.08;
const convertToUSD = moneyTransfer.map((money) => money * euroToUSD);

console.log(moneyTransfer);
console.log(convertToUSD);

const moneyTransferDescriptions = moneyTransfer.map(
  (money, i) =>
    `Movement ${i + 1}: あなたは${Math.abs(money)}円を${
      money > 0 ? "振り込んだ" : "引き出した"
    }`
);

console.log(moneyTransferDescriptions);

//Filter Method
const depositFilter = moneyTransfer.filter((money) => money > 0);
const withdrawFilter = moneyTransfer.filter((money) => money < 0);

console.log(depositFilter);
console.log(withdrawFilter);

//Reduce Method
const balanceChecker = moneyTransfer.reduce((acc, cur) => acc + cur, 0);
console.log(balanceChecker);

const maximunBalance = moneyTransfer.reduce((acc, money) => {
  if (acc > money) return acc;
  else return money;
}, moneyTransfer[0]);
console.log(maximunBalance);

//Chaining methods
const jpyToUSD = 0.0067;
console.log(moneyTransfer);

const totalDEpositsUSD = moneyTransfer
  .filter((money) => money > 0)
  .map((money, i, arr) => {
    console.log(arr);
    return money * jpyToUSD;
  })
  .reduce((acc, money) => acc + money, 0);
console.log(totalDEpositsUSD);

// find method
const firstWithdrawal = moneyTransfer.find((money) => money < 0);
console.log(moneyTransfer);
console.log(firstWithdrawal);

const bankAccounts = [
  {
    accountNumber: "1234567890",
    accountHolder: "John Doe",
    balance: 5000.75,
    accountType: "savings",
    moneyTransfer: [100, 200, 300, 500, 900],
  },
  {
    accountNumber: "0987654321",
    accountHolder: "Jane Smith",
    balance: 10500.5,
    accountType: "checking",
    moneyTransfer: [10, 400, 700, -500, 1000],
  },
  {
    accountNumber: "1122334455",
    accountHolder: "Alice Johnson",
    balance: 2500.0,
    accountType: "business",
    moneyTransfer: [600, -200, 300, 9000, -900],
  },
];

const findAccountHolder = bankAccounts.find(
  (acc) => acc.accountHolder === "Jane Smith"
);
console.log(findAccountHolder);

//some method
console.log(moneyTransfer.includes(400));
console.log(moneyTransfer.some((money) => money === 200));
console.log(moneyTransfer.some((money) => money > 100));

//every mothod
console.log(moneyTransfer.every((money) => money > 100));
console.log(moneyTransfer.every((money) => money > -1600));

//flat
const sampleArray_shore = [[1, 2, 3, 4], [5, 6, 7, 8], 9, 10];
console.log(sampleArray_shore.flat());

const sampleArray_deep = [[1, [2, 3], 4], [5, [6, 7, 8]], 9, 10];
console.log(sampleArray_deep.flat(1));
console.log(sampleArray_deep.flat(2));

const overallCash = bankAccounts
  .map((acc) => acc.moneyTransfer)
  .flat()
  .reduce((acc, money) => acc + money, 0);
console.log(overallCash);

const overallCash_flatmap = bankAccounts
  .flatMap((acc) => acc.moneyTransfer)
  .reduce((acc, money) => acc + money, 0);
console.log(overallCash);

//sorting
//String
const nameArray = ["Carl", "Mary", "Jane", "Adam", "Becky", "Jose"];
console.log(nameArray);
console.log(nameArray.sort);
console.log(nameArray);
//Values
const numberArray_1 = [20, 6, 4, 2, 1, 0, 4];
console.log(numberArray_1);
console.log(numberArray_1.sort);
console.log(numberArray_1);

//if文
const numberArray_2 = [4, 6, 23, 15, 3, 17, 9];
numberArray_2.sort((a, b) => a - b);
console.log(numberArray_2);

const numberArray_3 = [14, 5, 21, 10, 3, 15, 1];
numberArray_3.sort((a, b) => b - a);
console.log(numberArray_3);

//creating arrays
const numberArray_4 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//empty array
const emptyArray = new Array(7);
console.log(emptyArray);

emptyArray.fill(1);
console.log(emptyArray);
emptyArray.fill(1, 3, 5);
console.log(emptyArray);

numberArray_4.fill(23, 2, 6);
console.log(numberArray_4);

//from
const numberArray_5 = Array.from({ length: 7 }, () => 1);
console.log(numberArray_5);

const numberArray_6 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(numberArray_6);
