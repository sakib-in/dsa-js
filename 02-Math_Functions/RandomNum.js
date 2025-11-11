const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter 1st number of range: "));
const num2 = Number(prompt("Enter 2st number of range: "));

function randomNumGenerator(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
}

const min = Math.min(num1, num2);
const max = Math.max(num1, num2);

randomNumGenerator(min, max);
