const prompt = require("prompt-sync")();

const shape = prompt(
  "Enter a shape (circle, rectangle, or triangle) to find area: "
);

function findArea(shape) {
  let area;
  switch (shape.toLowerCase()) {
    case "circle":
      const r = Number(prompt("Enter radius of circle: "));
      area = 3.14 * r * r;

      break;

    case "rectangle":
      const l = Number(prompt("Enter Length of rectangle: "));
      const b = Number(prompt("Enter Breadth of rectangle: "));
      area = l * b;
      break;

    case "triangle":
      const base = Number(prompt("Enter base of triangle: "));
      const height = Number(prompt("Enter height of triangle: "));
      area = (base * height) / 2;
      break;

    default:
      console.log(
        "OOP! Wrong selection. Please enter circle, rectangle, or triangle."
      );
      return null;
  }

  return area;
}

const area = findArea(shape);
if (area !== null) {
  console.log(`Area of the ${shape}: ${area.toFixed(2)}`);
}
