"use strict";

const currentYear = 2024;

const personData = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const nobiNobita = new personData("Nobita", 1961);
console.log(nobiNobita);
const goudaTakeshi = new personData("Takeshi", 1960);
console.log(goudaTakeshi);
console.log(nobiNobita, goudaTakeshi);

personData.prototype.calcAge = function () {
  console.log(currentYear - this.birthYear);
};

nobiNobita.calcAge();
console.log(nobiNobita.__proto__);
console.log(nobiNobita.__proto__ === personData.prototype);

personData.prototype.species = "Human";
console.log(nobiNobita.species);

const arraySample = [1, 2, 3, 4, 5, 6, 7];
console.log(arraySample.__proto__);

const accountData = {
  ownerName: "Doraemon",
  accountMovement: [100, 2300, 300, 4800],
  get latestMovement() {
    return this.accountMovement.slice(-1).pop();
  },
  set latestMovement(mov) {
    this.accountMovement.push(mov);
  },
};

console.log(accountData.latestMovement);

accountData.latestMovement = 100;
console.log(accountData.accountMovement);

class personalData {
  constructor(lastName, graduationYear) {
    this.lastName = lastName;
    this.graduationYear = graduationYear;
  }
  calcCareerYears() {
    console.log(currentYear - this.graduationYear);
  }
  greetingLive() {
    console.log(`Hey ${this.lastName}`);
  }
  get careerYears() {
    return currentYear - this.graduationYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static heyThere() {
    console.log("Hey there!");
    console.log(this);
  }
}
const johnSmith = new personalData("Smith", 2011);
console.log(johnSmith);
console.log(johnSmith.__proto__ === johnSmith.prototype);
johnSmith.calcCareerYears();
johnSmith.greetingLive();

const walterWhite = new personalData("Walter White", 1965);
personalData.heyThere();

const personalDataProto = {
  calcAge() {
    console.log(currentYear - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const peterParker = Object.create(personalDataProto);
console.log(peterParker);
peterParker.name = "Peter";
peterParker.birthYear = 1988;
peterParker.calcAge();

const bruceWayne = Object.create(personalDataProto);
bruceWayne.init("Bruce", 1982);
bruceWayne.calcAge();
