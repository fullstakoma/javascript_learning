const arrySample = [1, 2, 3, 4];
const arryElement_1 = arrySample[0];
const arryElement_2 = arrySample[1];
const arryElement_3 = arrySample[3];
console.log([arryElement_1, arryElement_2, arryElement_3]);
const [arryElement_A, arryElement_B, arryElement_C] = arrySample;
console.log(arrySample);

const sushiRestaurant = {
  name: "Sushi Yamamoto",
  location: "東京都麻布十番",
  category: ["おまかせ", "にぎり", "丼", "吸物"],
  starter: ["漬物", "刺身", "巻き寿司"],
  main: ["1万円コース", "5万円コース", "10万円コース"],
  order: function (starterIndex, mainIndex) {
    return [this.starter[starterIndex], this.main[mainIndex]];
  },
};
let [starterCourse, mainCourse] = sushiRestaurant.category;
console.log(starterCourse, mainCourse);
let [starterCourse_1, , mainCourse_1] = sushiRestaurant.category;
console.log(starterCourse_1, mainCourse_1);
[starterCourse, mainCourse] = [starterCourse_1, mainCourse_1];
console.log(starterCourse, mainCourse);
const [starterDish, mainDish] = sushiRestaurant.order(2, 0);
console.log(starterDish, mainDish);

const nestedSample = [1, 2, [3, 4]];
console.log(nestedSample);
const [a, , [c, d]] = nestedSample;
console.log(nestedSample);

const [p = 1, q = 2, r = 3] = [4, 5];
console.log(p, q, r);
