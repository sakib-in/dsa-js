const prompt = require("prompt-sync")();

const gender = prompt("Enter gender(Male/Female): ");
const experience = Number(prompt("Enter Year of Service: "));
const qualification = prompt("Enter Qualification (Graduate/ Post-Gradute): ");

function calculateSalary(g, e, q) {
  let salary;

  if (g === "m") {
    if (e >= 10) {
      salary = q === "graduate" ? 10000 : 15000;
    } else {
      salary = q === "graduate" ? 7000 : 10000;
    }
  } else if (g === "f") {
    if (e >= 10) {
      salary = q === "graduate" ? 9000 : 12000;
    } else {
      salary = q === "graduate" ? 6000 : 10000;
    }
  } else {
    console.log("Invalid entry.");
    return;
  }

  console.log(`Salary: ₹${salary}`);
}

calculateSalary(
  gender[0].toLocaleLowerCase(),
  experience,
  qualification.toLocaleLowerCase()
);
