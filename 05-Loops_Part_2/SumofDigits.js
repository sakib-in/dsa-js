const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a Number: "));

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }
  return sum;
}

const digitSum = sumOfDigits(num);
console.log(`Sum of Digits of ${num}: ${digitSum}`);
