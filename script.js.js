"use strict";
// console.log(
//   (document.querySelector(".message").textContent = "Correct Number!")
// );
// console.log(document.querySelector(".message").textContent);
// console.log((document.querySelector(".number").textContent = 14));
// console.log((document.querySelector(".score").textContent = 14));

// console.log((document.querySelector(".guess").value = 14));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector(".number").textContent = secretNumber;
let highscore = document.querySelector(".highscore").textContent;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "First Enter a Number?";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Number is less!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost Game!";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Number is greater!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost Game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Number Guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
