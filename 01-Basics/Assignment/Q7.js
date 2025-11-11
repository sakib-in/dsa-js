let i = 19,
  j = 29,
  k;
k = j-- - i++ + --j - ++j + --i - j-- + ++i - j++;
console.log("i=" + i); //20
console.log("j=" + j); //28
console.log("k=" + k); //-7
