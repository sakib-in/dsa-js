const prompt = require("prompt-sync")();

const n = Number(prompt("Enter value of N: "));

function sumOfFibonacciNum(n) {
  let a = 0,
    b = 1;

  let sum = 0;
  for (let i = 0; i <= 2 * n; i++) {
    if (i % 2 === 0) sum += a;
    let c = a + b;
    a = b;
    b = c;
  }

  return sum;
}

const sum = sumOfFibonacciNum(n);
console.log(sum);
