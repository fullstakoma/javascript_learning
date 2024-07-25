"use strict";
const personalInformation = {
  name: "郷田たけし",
  age: 38,
  address: "東京都秋葉原",
  occupation: "歌手",
};

console.log(
  personalInformation.name,
  personalInformation.age,
  personalInformation.occupation
);

const {
  name: personalName,
  age: howOldAreYou,
  occupation: job,
} = personalInformation;

console.log(personalName, howOldAreYou, job);

const { address: whereDoYouLive = [], homeTown = [] } = personalInformation;
console.log(whereDoYouLive, homeTown);

let x = 1;
let y = 2;
let z;

//mutating variables
console.log(x, y, z);
const sampleObject = { x: 4, y: 5, z: 6 };
({ x, y, z } = sampleObject);
console.log(x, y, z);

const midtermGrades = {
  English: {
    HighestScore: 80,
    LowestScore: 30,
  },
  Math: {
    HighestScore: 90,
    LowestScore: 20,
  },
  Science: {
    HighestScore: 70,
    LowestScore: 40,
  },
};

console.log(midtermGrades.Math.HighestScore, midtermGrades.Math.LowestScore);
const {
  Math: { HighestScore: h, LowestScore: l },
} = midtermGrades;
console.log(h, l);

const sushiRestaurant = {
  name: "Sushi Yamamoto",
  location: "東京都麻布十番",
  category: ["おまかせ", "にぎり", "丼", "吸物"],
  starter: ["漬物", "刺身", "巻き寿司"],
  main: ["1万円コース", "5万円コース", "10万円コース"],
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "11:00",
    address,
  }) {
    console.log(
      `注文を受け付けたよ! ${this.starter[starterIndex]} と ${this.main[mainIndex]} を${address}に ${time}へお届けします。`
    );
  },
};

const firstSampleOrder = sushiRestaurant.orderDelivery({
  starterIndex: 0,
  mainIndex: 1,
  time: "10:00",
  address: "東京都港区六本木",
});
//順番入れかても問題ない。
const secondSampleOrder = sushiRestaurant.orderDelivery({
  address: "東京都港区麻布十番",
  mainIndex: 2,
  time: "9:00",
  starterIndex: 1,
});

//指定が無い場合、defualt値になる
const thirdSampleOrder = sushiRestaurant.orderDelivery({
  mainIndex: 1,
  address: "東京都港区六本木",
});

//default値のが書いてないaddressはundefinedになる
const fourthSampleOrder = sushiRestaurant.orderDelivery({
  starterIndex: 0,
  mainIndex: 1,
  time: "10:00",
});
