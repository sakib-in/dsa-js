const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findDivisorsSum(n) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

const divisorsSum = findDivisorsSum(num);

if (divisorsSum > num) console.log("Abundant Number");
else console.log("Not an Abundant Numeber");
