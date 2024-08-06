"use strict";

const currentYear = 2024;
const personData = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

personData.prototype.calcAge = function () {
  console.log(currentYear - this.birthYear);
};

const studentData = function (firstName, birthYear, courseTitle) {
  personData.call(this, firstName, birthYear);
  this.courseTitle = courseTitle;
};

studentData.prototype = Object.create(personData.prototype);

studentData.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.courseTitle}`);
};

const bruceWayne = new studentData("Bruce", 2002, "Computer Science");
bruceWayne.introduce();
const mikeMyers = new studentData("Mike", 1963, "Acting");
mikeMyers.calcAge();

console.log(mikeMyers.__proto__);
console.log(mikeMyers.__proto__.__proto__);

console.log(mikeMyers instanceof studentData);
console.log(mikeMyers instanceof personData);
console.log(mikeMyers instanceof Object);

class personClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calculateAge() {
    console.log(currentYear - this.birthYear);
  }
  greetingHello() {
    console.log(`Hello, my name is ${this.fullName}`);
  }
  oneLiner() {
    console.log(
      `${this.fullName} is ${currentYear - this.birthYear} years old`
    );
  }
}

class studentClass extends personClass {
  constructor(fullName, birthYear, courseTitle) {
    super(fullName, birthYear);
    this.courseTitle = courseTitle;
  }
  introduceSelf() {
    console.log(`My name is ${this.fullName} and I study ${this.courseTitle}`);
  }
  oneLiner() {
    console.log(
      `${this.fullName} will be ${
        currentYear - this.birthYear + 1
      } years old next year.`
    );
  }
}

const mattDamon = new studentClass("Matt Damon", 1970, "Astrophysics");
mattDamon.calculateAge();
mattDamon.introduceSelf();
mattDamon.oneLiner();

const personProto = {
  calculateAgeNum() {
    console.log(currentYear - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const clarkKent = Object.create(personProto);
const studentProto = Object.create(personProto);
studentProto.init = function (firstName, birthYear, courseTitle) {
  personProto.init.call(this, firstName, birthYear);
  this.courseTitle = courseTitle;
};

studentProto.introduceYourself = function () {
  console.log(`My name is ${this.firstName} and I study ${this.courseTitle}`);
};

const willSmith = Object.create(studentProto);
willSmith.init("Will", 1968, "International Relations");
willSmith.introduceYourself();
willSmith.calculateAgeNum();
