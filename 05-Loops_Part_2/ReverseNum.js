const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a Number: "));

function reverseNum(n) {
  let rev = '';
  while (n > 0) {
    let rem = n % 10;
    rev += rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

const newNum = reverseNum(num);
console.log(`${num} after reverse: ${newNum}`);
