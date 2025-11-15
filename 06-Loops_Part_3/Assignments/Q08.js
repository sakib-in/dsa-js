const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findPrimeFactors(n) {
  const factors = [];

  if (n % 2 === 0) factors.push(2);

  for (let i = 3; i <= Math.floor(n / 2); i += 2) {
    let isPrime = true;
    for (let j = 2; j <= Math.floor(i / 2); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && n % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

const primeFactors = findPrimeFactors(num);
console.log(`Prime Factors: ${primeFactors.join(" ")}`);
