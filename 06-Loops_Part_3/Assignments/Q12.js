const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findLargestDigit(n) {
  let max = 0;
  while (n > 0) {
    let rem = n % 10;
    if (max < rem) max = rem;
    n = Math.floor(n / 10);
  }

  console.log("Largest Digit: " + max);
}

findLargestDigit(num);
