const prompt = require("prompt-sync")();

const rating = Number(prompt("Enter rating of the movie: "));
const name = prompt("Enter the name of movie: ");

function checkMovieCategory(rating, name) {
  if (rating <= 2.0) console.log(`OP - ${name} is Flop`);
  else if (rating > 2.0 && rating <= 3.4)
    console.log(`OP - ${name} is Semi Hit`);
  else if (rating > 3.4 && rating <= 4.5) console.log(`OP - ${name} is Hit`);
  else if (rating > 4.5 && rating <= 5.0)
    console.log(`OP - ${name} is Super Hit`);
  else {
    console.log("Movie rating must be under 5.0");
    console.log("Try Again!");
  }
}

checkMovieCategory(rating.toFixed(1), name.toUpperCase());
