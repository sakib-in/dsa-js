const prompt = require("prompt-sync")();

const r = Number(prompt("Enter radius of circle: "));

function calculateCircleProperties(r) {
  let circum = 2 * 3.14 * r;
  let area = 3.14 * r * r;

  console.log(`Circumference of Circle: ${circum.toFixed(2)}`);
  console.log(`Area of Circle: ${area.toFixed(2)}`);
}

calculateCircleProperties(r);
