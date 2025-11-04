//  Find First Repeating Character

// function firstRepeat(str) {
//   const seen = new Set();
//   for (let ch of str) {
//     if (seen.has(ch)) return ch;
//     seen.add(ch);
//   }
// }
// console.log(firstRepeat("success")); // c

function firstRepeated(str) {
  const seen = new Set();

  for (let ch of str) {
    if (seen.has(ch)) {
      return ch;
    } else {
      seen.add(ch);
    }
  }
}

str = "aksshay";

console.log("repeating character is - ", firstRepeated(str));
