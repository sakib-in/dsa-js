const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter 1st number: "));
const num2 = Number(prompt("Enter 2nd number: "));

function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

const swapedNum = swapNumbers(num1, num2);

console.log(`Number after swapping: ${swapedNum}`);
