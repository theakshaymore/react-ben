function findRepeating(str) {
  const seen = new Set();
  for (let ch of str) {
    if (seen.has(ch)) {
      return ch;
    } else {
      seen.add(ch);
    }
  }
}

let str = "aksshay";
console.log(findRepeating(str));
