"use strict";

class accountClass {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // procted property
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  //Public interface
  getMovements() {
    return this._movements;
    return this;
  }
  accountDeposit(val) {
    this._movements.push(val);
    return this;
  }
  accountWithdraw(val) {
    this.accountDeposit(-val);
    return this;
  }
}

const accountTom = new accountClass("Tom", "USD", 4352);

accountTom._movements.push(300);
accountTom._movements.push(-120);
console.log(accountTom);
accountTom.getMovements();

accountTom.accountDeposit(460);
accountTom.accountWithdraw(900);

console.log(accountTom);
console.log(accountTom.pin);

//Chaining
accountTom
  .accountDeposit(500)
  .accountDeposit(400)
  .accountWithdraw(400)
  .accountWithdraw(200);

console.log(accountTom.getMovements());
