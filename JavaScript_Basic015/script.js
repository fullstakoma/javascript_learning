"use strict";
//Or
console.log("" || "Miki");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

let sampleNumber = 20;
const chooseNumber_A = sampleNumber || 10;
console.log(chooseNumber_A);
const chooseNumber_B = sampleNumber ? sampleNumber : 10;
console.log(chooseNumber_B);

sampleNumber = 0;
const chooseNumber_C = sampleNumber || 10;
console.log(chooseNumber_C);

const chooseNumber_D = sampleNumber ?? 10;
console.log(chooseNumber_D);

//And
console.log(0 && "Mika");
console.log(7 && "Mika");
console.log("Hello" && 23 && null && "Mika");

const hamburgerShop = {
  mainBurgers: [
    "Big Burger",
    "Cheese Burger",
    "Teriyaki Burger",
    "Fish Burger",
  ],
  orderHamburger: function (burger_1, burger_2) {
    console.log(burger_1, burger_2);
  },
};

//記載方法その1

if (hamburgerShop.mainBurgers) {
  hamburgerShop.orderHamburger("Big Burger", "Double Patty Burger");
}
//記載方法その2
hamburgerShop.mainBurgers &&
  hamburgerShop.orderHamburger("Big Burger", "Double Patty Burger");

const restAPI_Omega = {
  title: "Pipeline Omega",
  location: "東京都港区田町",
  minimemAccident: 10,
};

const restAPI_Alpha = {
  title: "Pipeline Alpha",
  location: null,
  minimemAccident: 0,
};

const restAPI_Beta = {
  title: "Pipeline Beta",
};

restAPI_Omega.minimemAccident ||= 10;
restAPI_Alpha.minimemAccident ||= 10;
restAPI_Beta.minimemAccident ||= 10;

console.log(restAPI_Omega);
console.log(restAPI_Alpha);
console.log(restAPI_Beta);

restAPI_Omega.minimemAccident ??= 10;
restAPI_Alpha.minimemAccident ??= 10;
restAPI_Beta.minimemAccident ??= 10;

console.log(restAPI_Omega);
console.log(restAPI_Alpha);
console.log(restAPI_Beta);

restAPI_Omega.location ??= "<Location Unknown>";
restAPI_Alpha.location ??= "<Location Unknown>";
restAPI_Beta.location ??= "<Location Unknown>";

console.log(restAPI_Omega);
console.log(restAPI_Alpha);
console.log(restAPI_Beta);
