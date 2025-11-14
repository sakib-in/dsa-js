const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function checkAutomorphicNum(n) {
  const copy = n;
  const sqr = n * n;
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  if (sqr % Math.pow(10, count) === copy) {
    console.log(`${copy} is an Automorphic number`);
  } else {
    console.log(`${copy} is not an Automorphic number`);
  }
}

checkAutomorphicNum(num);
