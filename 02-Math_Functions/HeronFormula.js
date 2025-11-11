const prompt = require("prompt-sync")();

const a = Number(prompt("Enter side a of triangle: "));
const b = Number(prompt("Enter side b of triangle: "));
const c = Number(prompt("Enter side c of triangle: "));

function calculateTriangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(`Area of triangle: ${A.toFixed(2)}`);
}

if (a + b <= c || b + c <= a || a + c <= b) {
  console.log("Triangle not possible with these sides");
} else {
  calculateTriangleArea(a, b, c);
}
