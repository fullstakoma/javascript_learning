//基本的な話
const arraySample = [4, 5, 6];
//悪い例
const bad_arraySample = [
  1,
  2,
  3,
  arraySample[0],
  arraySample[1],
  arraySample[2],
];
console.log(bad_arraySample);
//良い例
const good_arraySample = [1, 2, 3, ...arraySample];
console.log(1, 2, 3, arraySample);
console.log(1, 2, 3, ...arraySample);
console.log(good_arraySample);

//ラーメンショップを使った例
const ramenShop = {
  shopName: "リアルラーメンマン",
  mainMenu: ["醤油ラーメン", "味噌ラーメン", "豚骨ラーメン"],
  sideMenu: ["餃子", "唐揚げ", "搾菜"],
  otsumami: [],
  orderRamen: function (snack_1, snack_2, snack_3) {
    console.log(
      `へい、おまちどう！おつまみセットだよ。本日は${snack_1}、${snack_2}、${snack_3}だよ`
    );
  },
};

const snacklist = ["イカ塩", "チョリソー", "ゆで卵"];
ramenShop.orderRamen(snacklist[0], snacklist[1], snacklist[2]);
ramenShop.orderRamen(...snacklist);

const newMainMenu = [...ramenShop.mainMenu, "塩ラーメン"];
console.log(ramenShop.mainMenu);
console.log(newMainMenu);

const allMenu = [...ramenShop.mainMenu, ...ramenShop.sideMenu];
console.log(allMenu);

//Objectsについて;
//新しいObjectを入れる
const addDataRamenShop = {
  foundIn: 1970,
  ...ramenShop,
  founder: "ラーメンマン",
};
console.log(addDataRamenShop);
//オブジェクトを変える
console.log(ramenShop.shopName);
ramenShop.shopName = "復刻リアルラーメンマン";
console.log(ramenShop.shopName);
