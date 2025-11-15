const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findDigitSum(num) {
  let n = num;
  let digitSum = 0;

  while (n > 0) {
    let rem = n % 10;
    digitSum += rem;
    n = Math.floor(n / 10);
  }

  return digitSum;
}

const digitsSum = findDigitSum(num);
if (num % digitsSum === 0) console.log("Harshad Number");
else console.log("Not a Harshad Number");
