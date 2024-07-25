//書き方その1
const openingHours = {
  mon: {
    open: 9,
    close: 18,
  },
  tue: {
    open: 9,
    close: 18,
  },
  wed: {
    open: 9,
    close: 18,
  },
  thu: {
    open: 9,
    close: 18,
  },
};

//書き方その2
const weekDays = ["月", "火", "水", "木", "金", "土", "日"];
const restingHours = {
  [weekDays[0]]: {
    open: 11,
    close: 12,
  },
  [weekDays[1]]: {
    open: 11,
    close: 12,
  },
  [weekDays[2]]: {
    open: 11,
    close: 12,
  },
  [weekDays[3]]: {
    open: 0,
    close: 12,
  },
};

//いろんな表現方法
const storeInformation = {
  shopName: "Candy Shop Poppin",
  locatedAt: "東京都港区麻布十番",
  ownerName: "安室奈美",
  candylist: ["チョコレート", "綿あめ", "シュガーケーン", "ジェリービーン"],
  openingHours: openingHours,
  restingHours: restingHours,
  //functionの書き方その1
  ownerHelloMessage: function (yourName) {
    console.log(`${this.ownerName}です！${yourName}さん来てくれてありがとう。`);
  },
  //functionの書き方その2
  ownerPresentingCandy() {
    for (const candyItem of this.candylist) {
      console.log(`当店では${candyItem}を持っているよ`);
    }
  },
};
console.log(storeInformation.ownerHelloMessage("田中太郎"));
console.log(storeInformation.ownerPresentingCandy());

//データ確認その1
if (storeInformation.openingHours && storeInformation.openingHours.mon)
  console.log(storeInformation.openingHours.mon.open);
//データ確認その2 WITHを活用
console.log(storeInformation.openingHours.mon?.open);
console.log(storeInformation.openingHours?.mon?.open);

//リアルなデータ確認
for (const day of weekDays) {
  const restConfirm =
    storeInformation.restingHours[day]?.open ?? "本日はお休みです";
  console.log(`${day}は${restConfirm}時からお休みいただいているよ`);
}

//メソッドの確認
console.log(
  storeInformation.ownerHelloMessage?.("山田花子") ?? "入力値が存在しません"
);
console.log(storeInformation.ownerHelloMessage?.() ?? "入力値が存在しません");

//Arrayでの適用
const sampleUsers = [
  { name: "安室なみえ", email: "test123@samplemail.com", occupation: "singer" },
  {
    name: "ドリューバリモア",
    email: "test456@samplemail.com",
    occupation: "actress",
  },
];

//書き方その1
if (sampleUsers.length > 0) console.log(sampleUsers[0].name);
else console.log("お名前が入力されていません");

//書き方その2
console.log(sampleUsers[0]?.name ?? "お名前が入力されていません");
