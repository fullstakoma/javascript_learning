"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let defaltScore = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guessNumber").value);
  console.log(guessNumber, typeof guessNumber);
  if (!guessNumber) {
    document.querySelector(".message").textContent = "No number";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    defaltScore++;
    document.querySelector(".score").textContent = defaltScore;
    document.querySelector("body").style.backgroundColor = "#f9f0e4";
    document.querySelector(".message").style.fontSize = "32px";
    if (defaltScore > highScore) {
    }
    highScore = defaltScore;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guessNumber > secretNumber) {
    document.querySelector(".message").textContent = "もっと低いよ";
    defaltScore--;
    document.querySelector(".score").textContent = defaltScore;
  } else if (guessNumber < secretNumber) {
    document.querySelector(".message").textContent = "もっと高いよ";
    defaltScore--;
    document.querySelector(".score").textContent = defaltScore;
  }
});
//もう一回を押した場合
document.querySelector(".again").addEventListener("click", function () {
  defaltScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = defaltScore;
  document.querySelector(".guessNumber").value = "";
  document.querySelector("body").style.backgroundColor = "#ffdcaa";
  document.querySelector(".message").style.fontSize = "";
});
