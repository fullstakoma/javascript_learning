"use strict";
//Setについて
const italianMenu = new Set([
  "パスタ",
  "ピザ",
  "スパゲッティ",
  "カルボナーラ",
  "スパゲッティ",
  "ピザ",
]);

console.log(italianMenu);

console.log(
  new Set(["パエリア", "アヒージョ", "アヒージョ", "ハモンセラーノ"])
);

console.log(italianMenu.size);
console.log(italianMenu.has("ピザ"));
italianMenu.add("ジェラート");
console.log(italianMenu);
italianMenu.add("ジェラート");
console.log(italianMenu);
italianMenu.delete("スパゲッティ");
console.log(italianMenu);
//意味がない
console.log(italianMenu[0]);

const staffList = [
  "ウェイター",
  "シェフ",
  "ウェイター",
  "マネージャー",
  "マネージャー",
];

const staffUnique_1 = new Set(staffList);
console.log(staffUnique_1);
const staffUnique_2 = [...new Set(staffList)];
console.log(staffUnique_2);

//別のやり方
console.log(
  new Set([
    "ウェイター",
    "シェフ",
    "ウェイター",
    "マネージャー",
    "マネージャー",
  ])
);
console.log(
  new Set([
    "ウェイター",
    "シェフ",
    "ウェイター",
    "マネージャー",
    "マネージャー",
  ]).size
);

console.log(new Set("amuronamie").size);

//Mapsについて
const sampleBarber = new Map();
sampleBarber.set("店名", "ヘアカットサロン太郎");
sampleBarber.set(1, "東京都上野");
console.log(sampleBarber.set(1, "東京都上野"));
console.log(sampleBarber.set(2, "東京都秋葉原"));

sampleBarber
  .set("サービス", ["ヘアカット", "髭剃り", "パーマ", "肩揉み"])
  .set("開店", 11)
  .set("閉店", 20)
  .set(true, "開店してます")
  .set(false, "閉店してます");

console.log(sampleBarber.get("店名"));
console.log(sampleBarber.get(true));
console.log(sampleBarber.get(1));

const currentTime = 8;
console.log(
  sampleBarber.get(
    currentTime > sampleBarber.get("開店") &&
      currentTime < sampleBarber.get("閉店")
  )
);

console.log(sampleBarber.has("カテゴリ"));
sampleBarber.delete(2);

const arraySample = [1, 2];
sampleBarber.set(arraySample, "テスト");
sampleBarber.set(document.querySelector("h1", "Heading"));
console.log(sampleBarber.size);
console.log(sampleBarber.get(arraySample));
sampleBarber.clear();

//Mapの続き
const programmingSurvey = new Map([
  ["質問です", "この世で一番最強なプログラミング言語はどれですか？"],
  [1, "C++"],
  [2, "Java"],
  [3, "Java Script"],
  [4, "Python"],
  ["正解", 2],
  [true, "正解！🥳"],
  [false, "残念。違います。"],
]);

console.log(programmingSurvey);

//実際の活用方法
console.log(programmingSurvey.get("質問です"));
for (const [key, value] of programmingSurvey) {
  if (typeof key === "number") console.log(`${key}:${value}`);
}
const displayAnswer = Number(prompt("どれでしょう？"));
console.log(
  programmingSurvey.get(programmingSurvey.get("正解") === displayAnswer)
);

//MapからArrayへ
console.log([...programmingSurvey]);
console.log([...programmingSurvey.keys()]);
console.log([...programmingSurvey.values()]);

//Objectからmapへ
const edmArtists = [
  {
    name: "Martin Garrix",
    origin: "Netherlands",
  },
  {
    name: "Avicii",
    origin: "Sweden",
  },
  {
    name: "Zedd",
    origin: "Russia/Germany",
  },
  {
    name: "Marshmello",
    origin: "USA",
  },
];

console.log(Object.entries(edmArtists));
const edmMap = new Map(Object.entries(edmArtists));
console.log(edmMap);
