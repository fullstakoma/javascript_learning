"use strict";
const weaponSystem = {
  primaryWeapon: [
    "アサルトライフル",
    "サブマシンガン",
    "ショットガン",
    "バズーカ",
  ],
  subWeapon: ["ピストル", "ナイフ", "メディキット"],
};

const allWeapons = [...weaponSystem.primaryWeapon, ...weaponSystem.subWeapon];

//ただの全出しになる
for (const item of allWeapons) console.log(allWeapons);
//個別出しになる
for (const [index, elements] of allWeapons.entries()) {
  console.log(index, elements);
}

const weekDays = ["月", "火", "水", "木", "金", "土", "日"];
const openingHours = {
  [weekDays[0]]: {
    open: 7,
    close: 17,
  },
  [weekDays[1]]: {
    open: 8,
    close: 18,
  },
  [weekDays[2]]: {
    open: 9,
    close: 19,
  },
  [weekDays[3]]: {
    open: 10,
    close: 20,
  },
  [weekDays[4]]: {
    open: 0,
    close: 0,
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `本店は${properties.length}日開いてます。`;
for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`${key}曜日には${open}時に開いて${close}時に閉店します。`);
}
