const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function checkStrongNum(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact = fact * i;
    }
    sum += fact;
    n = Math.floor(n / 10);
  }
  return sum;
}

const strong = checkStrongNum(num);
if (strong === num) {
  console.log(`${num} is a Strong number`);
} else {
  console.log(`${num} is not a Strong number`);
}
