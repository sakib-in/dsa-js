const prompt = require("prompt-sync")();

const l = Number(prompt("Enter length of Array: "));

const arr = [];
for (let i = 1; i <= l; i++) {
  const elem = Number(prompt(`Enter ${i} element(only 0 and 1): `));
  if (elem === 0 || elem === 1) {
    arr.push(elem);
  } else {
    console.log("Element must be 0 or 1 - Try Again!");
    return 0;
  }
}

function moveZeros(arr) {
  let i = 0,
    j = 0;

  while (i < arr.length) {
    if (arr[i] === 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }

  return arr;
}

const getNewArr = moveZeros(arr);
console.log(`Array after moving zeros = ${getNewArr.join(" ")}`);
