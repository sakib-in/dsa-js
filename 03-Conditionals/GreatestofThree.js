const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter 1st number: "));
const num2 = Number(prompt("Enter 2nd number: "));
const num3 = Number(prompt("Enter 3rd number: "));

function findGreatest(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= c) return b;
  else return c;
}

const greatest = findGreatest(num1, num2, num3);
console.log(`Greatest number is: ${greatest}`);
