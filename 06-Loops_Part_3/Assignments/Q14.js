const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findEvenDigitsSum(n) {
  let eveSum = 0;

  while (n > 0) {
    let rem = n % 10;
    if (rem % 2 === 0) eveSum += rem;
    n = Math.floor(n / 10);
  }

  console.log(`Sum of Even Digits: ${eveSum}`);
}

findEvenDigitsSum(num);
