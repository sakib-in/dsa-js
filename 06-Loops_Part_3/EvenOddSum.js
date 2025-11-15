const prompt = require("prompt-sync")();

const start = Number(prompt("Enter starting number: "));
const end = Number(prompt("Enter end number: "));

function calculateEvenOddSum(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }

  let evenSum = 0;
  let oddSum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) evenSum += i;
    else oddSum += i;
  }

  console.log(`Even Sum: ${evenSum}`);
  console.log(`Odd Sum: ${oddSum}`);
}

calculateEvenOddSum(start, end);
