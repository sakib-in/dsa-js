const prompt = require("prompt-sync")();

const P = Number(prompt("Enter the principal amount: "));
const r = Number(prompt("Enter the annual interest rate: "));
const t = Number(prompt("Enter the time: "));
const n = Number(prompt("Enter the number of times: "));

function calculateCompoundInterest(P, r, t, n) {
  let CI = P * Math.pow(1 + r / n, n * t) - P;
  return CI.toFixed(2);
}

let CI = calculateCompoundInterest(P, r, t, n);
console.log(`Compound Interest: ${CI}`);
