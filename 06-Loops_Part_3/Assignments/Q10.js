const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function checkNeonNumber(n) {
  let sqr = Math.pow(n, 2);

  let sum = 0;
  while (sqr > 0) {
    let rem = sqr % 10;
    sum += rem;
    sqr = Math.floor(sqr / 10);
  }

  if (n === sum) console.log(`${n} is a Neon Number`);
  else console.log(`${n} is not a Neon Number`);
}

checkNeonNumber(num);
