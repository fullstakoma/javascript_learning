"use strict";

//従来の書き方
const bookingArrayData = [];
let defualtCustomerNumber = 2;
let defualtCourseCost = 3000;

const createBooking = function (
  courseName,
  numCustomer = defualtCustomerNumber,
  numPrice = defualtCourseCost * numCustomer
) {
  const bookingFunctionData = {
    courseName,
    numCustomer,
    numPrice,
  };
  console.log(bookingFunctionData);
  bookingArrayData.push(bookingFunctionData);
};

createBooking("Main Course", 4, 10000);
createBooking("Second Course");
createBooking("Second Course", undefined, 9000);

//Passing Arguments in Value
const reservationNum_1087 = "12XG67";
const customerData_1087 = {
  firstName: "Tony",
  lastName: "Gonzalez",
  phoneNum: "08012345678",
  reservationNum: "12XG67",
};

const checkReservation = function (reservationNum, reservationName) {
  reservationNum = reservationNum;
  reservationName = "Mr." + customerData_1087.lastName;
  if (customerData_1087.reservationNum === reservationNum_1087) {
    console.log(`${reservationName} has reserved a table as ${reservationNum}`);
  } else {
    console.log("Wrong reservation.");
  }
};

checkReservation(reservationNum_1087, customerData_1087);

//high order function
const readAndTransfer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

const uppercaseLarger = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

readAndTransfer("javascritp is the BEST!", uppercaseLarger);

// functions returning other functions
const greetSomeone = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHello = greetSomeone("Hello");
greetHello("John");
greetHello("Tony");

greetSomeone("Hi")("Kenny");

// Arrow version
const greetSomeoneArrow = (greeting) => (name) =>
  console.log(`${greeting} ${name}`);

greetSomeoneArrow("こんにちは")("太郎");

//call and apply methods.
const generateFlightData = {
  airLine: "",
  iataCode: "",
  bookingArray: [],

  bookingData(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookingArray.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const lufthansa = {
  airLine: "Deutsche Lufthansa AG",
  iataCode: "LH",
  bookingArray: [],
};

const ana = {
  airLine: "All Nippon Airways",
  iataCode: "NH",
  bookingArray: [],
};

const qantas = {
  airLine: "Qantas Airways Limited",
  iataCode: "QF",
  bookingArray: [],
};

const british = {
  airLine: "British Airways",
  iataCode: "BA",
  bookingArray: [],
};

const bookFlight = generateFlightData.bookingData;
bookFlight.call(lufthansa, 2565, "Johnathon Hacker");
bookFlight.call(ana, 4523, "Yamanaka Hiroshi");
const flightData = [7693, "Antonio Baba"];
bookFlight.call(qantas, ...flightData);

//Bind method
const bookBA = bookFlight.bind(british);
bookBA(6581, "James Cook");
const bookBA1181 = bookFlight.bind(british, 1181);
bookBA1181("Victoria Adams");

//Event Listeners

const buyaCar = {
  manufactureCompany: "Toyota",
  modelIs: "Tacoma",
};

buyaCar.purchaseNumber = 2;
console.log(buyaCar);
buyaCar.purchaseOrder = function () {
  console.log(this);
  this.purchaseNumber++;
  console.log(this.purchaseNumber);
};

document
  .querySelector(".buy")
  .addEventListener("click", buyaCar.purchaseOrder.bind(buyaCar));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 2000));
const addVAT = addTax.bind(null, 0.2);
//value + value * rateのvalueにnullがかかり、0.2がrateにかかっている。

console.log(addVAT(1000));
console.log(addVAT(100));

//違う書き方
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addValueTax = addTaxRate(0.07);
console.log(addValueTax(1000));
console.log(addValueTax(2000));

//IIFE
const runOnce = function () {
  console.log("一回しか起動しない");
};
runOnce();

{
  const isPrivate = 34;
  var notPrivate = 43;
}

console.log(notPrivate);

//Closer
//事例1
const secureCountCandy = function () {
  let candyCount = 0;
  return function () {
    candyCount++;
    console.log(`${candyCount}個の飴ちゃん🍭`);
  };
};
const candyPlus = secureCountCandy();

candyPlus();
candyPlus();
console.log(candyPlus);

//事例2
let function_Main;
const function_A = function () {
  const value_A = 10;
  function_Main = function () {
    console.log(value_A * 2);
  };
};

const function_B = function () {
  const value_B = 20;
  function_Main = function () {
    console.log(value_B * 100);
  };
};

function_A();
function_Main();
console.dir(function_Main);

function_B();
function_Main();
console.dir(function_Main);

//事例3
const processMachine = function (n, wait) {
  const perLot = n / 4;
  setTimeout(function () {
    console.log(`${n}個の部品を処理しています。`);
    console.log(
      `金型は4つごとに処理できるので${perLot}個のロットが生産されます。`
    );
  }, wait * 1000);
  console.log(`${wait}秒ごとに生産されます。少々お待ちください。`);
};

const perLot = 500;
processMachine(1000, 3);
