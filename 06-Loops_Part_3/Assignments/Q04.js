const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function checkPerfectSquare(n) {
  const sqr = Math.sqrt(n);
  if (sqr * sqr === n) console.log("Perfect Square");
  else console.log("Not a Perfect Square");
}

checkPerfectSquare(num);
