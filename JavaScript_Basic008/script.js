"use strict";
const myProfile = {
  firstName: "Tony",
  lastName: "Tanaka",
  currentAge: 29,
  currentJob: "Lawyer",
  bestFriends: ["John", "James", "Kenny"],
};

console.log(myProfile);
console.log(myProfile.lastName);
console.log(myProfile["lastName"]);

const nameKey = "Name";
console.log(myProfile["first" + nameKey]);
console.log(myProfile["last" + nameKey]);

console.log(myProfile.bestFriends[0]);
console.log(myProfile.bestFriends.length);

//If Elseの活用

const guessTheJob = prompt("Tonyのお仕事を当ててごらん？");

myProfile[guessTheJob] = myProfile.currentJob
  ? console.log(`正解！${myProfile.currentJob}でした！`)
  : console.log("ハズレ！");

//新しいデータの挿入
myProfile.currentResidence = "England";
console.log(myProfile);

//Functionの活用
const currentYear = 2024;
const herProfile = {
  firstName: "Miki",
  lastName: "Sato",
  birthYear: 1996,
  hasDriversLicence: true,
  calcAge: function () {
    this.currentAge = currentYear - this.birthYear;
    return this.currentAge;
  },
  createSummary: function () {
    return `${this.firstName}さんは${this.calcAge()}歳で${
      this.hasDriversLicence
        ? "自動車免許を持っている"
        : "自動車免許はm乗っていない"
    }`;
  },
};

console.log(herProfile);
console.log(herProfile.calcAge());
console.log(herProfile.currentAge);
console.log(herProfile.createSummary());
