const prompt = require("prompt-sync")();

const a = Number(prompt("Enter 1st number: "));
const b = Number(prompt("Enter 2nd number: "));

function findLCM(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  const gcd = max;
  const lcm = Math.abs(a * b) / gcd;

  console.log(`The LCM of ${a} and ${b} is ${lcm}`);
}

findLCM(a, b);
