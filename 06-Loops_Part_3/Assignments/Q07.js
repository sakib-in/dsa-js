const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findNumWithXDivisors(x) {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count === x) result.push(i);
  }

  return result;
}

const nums = findNumWithXDivisors(num);
if (nums.length > 0)
  console.log(`Numbers with ${num} divisors:`, nums.join(", "));
else console.log(`No numbers between 1 and 100 have exactly ${num} divisors.`);
