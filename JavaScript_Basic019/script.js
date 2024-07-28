"use strict";

const airlineName = "Japan Airlines";
const planefamily = "A320";

console.log(planefamily[0]);
console.log(planefamily[1]);
console.log(planefamily[2]);
console.log("B747"[0]);

console.log(airlineName.length);
console.log("B747".length);

console.log(airlineName.indexOf("r"));
console.log(airlineName.lastIndexOf("r"));
console.log(airlineName.indexOf("z"));

console.log(airlineName.slice(6));
console.log(airlineName.slice(6, 7));
console.log(airlineName.slice(0, airlineName.indexOf(" ")));
console.log(airlineName.slice(airlineName.lastIndexOf(" ") + 1));
console.log(airlineName.slice(-2));
console.log(airlineName.slice(1, -1));

//飛行機の席で真ん中かどうか判定する。前提としてBかEのコードであれば真ん中です。
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("あなたの席は真ん中です。");
  else console.log("あなたの席は窓際側か通路側です");
};
console.log("11B");
console.log("23C");
console.log("03E");

console.log(new String("山田太郎"));
console.log(typeof new String("山田太郎"));
console.log(typeof new String("山田太郎").slice(2));

console.log(airlineName.toLowerCase);
console.log(airlineName.toUpperCase);
//頭文字だけ大文字にする
const passengerName = "jOhN";
const passengerNameLower = passengerName.toLowerCase();
const passengerNameCorrect =
  passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameCorrect);

//emailが同じか判断
const sampleEmail = "sample@email.com";
const compareEmail = "Sample@Email.com";

const normalizedEmail = compareEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(sampleEmail === normalizedEmail);

//replacing
const directionLeft = "左方向です";
const friendlyDirectionRight = directionLeft
  .replace("左", "右")
  .replace("です", "だよ");
console.log(friendlyDirectionRight);

const announcingGate = "23番搭乗ゲートにお越しください";
console.log(announcingGate.replace("ゲート", "口"));
console.log(announcingGate.replace(/ゲート/g, "口"));

//Booleans
const newAirbus = "Airbus A320neo";
console.log(newAirbus.includes("A320"));
console.log(newAirbus.includes("Boeing"));
console.log(newAirbus.startsWith("Airb"));

//サンプル
const checkBaggage = function (declaration) {
  const boardingBaggage = declaration.toLowerCase();
  if (boardingBaggage.includes("knife") || boardingBaggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard😊");
  }
};

checkBaggage("I have a knife in my bag");
checkBaggage("I have a GUN in my bag");
checkBaggage("I have a kNiFe in my bag");
checkBaggage("I have a gunknife in my bag");
checkBaggage("I have a dog in my bag");

//Split and Join
console.log("と+て+も+良い+天気+で+す+ね".split("+"));
console.log("Origa Yakovleva".split(" "));

const [firstName, lastName] = "Origa Yakovleva".split(" ");

const newName = ["Ms.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const nameList = name.split(" ");
  const namesUpper = [];
  for (const n of nameList) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("sarah jessica parker");
capitalizeName("oRiga yakoVleva");

//Padding
const omedetoMessage = "おめでとう";
console.log(omedetoMessage.padStart(20, "✨").padEnd(30, "✨"));
console.log("おめでとう".padStart(20, "✨").padEnd(30, "✨"));
//クレジットカードのマスキングとか
const maskCreditCard = function (number) {
  const startingPoint = number + "";
  const endingPoint = startingPoint.slice(-4);
  return endingPoint.padStart(startingPoint.length, "*");
};
console.log(maskCreditCard(375987000000088));

//Repeat

const badWeatherMessage =
  "現在、悪天候により全てのフライトが遅延しております。";
console.log(badWeatherMessage.repeat(5));

const planesInLine = function (n, i) {
  console.log(`ただいま${n}機の機体が待機中です。`.repeat(i));
};

planesInLine(5, 1);
planesInLine(4, 2);
planesInLine(3, 3);
