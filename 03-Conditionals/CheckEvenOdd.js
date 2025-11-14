const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function checkEvenOdd(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

const numIs = checkEvenOdd(num);
console.log(`${num} is ${numIs}`);
