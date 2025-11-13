function higherFunction(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  console.log("addition= ", a + b);
}
function sub(a, b) {
  console.log("subtraction= ", a - b);
}

higherFunction(5, 4, add);
higherFunction(5, 4, sub);

// filter method
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 0];
const res = nums.filter((num) => num % 2 === 0);
console.log(res);

// reduce method
const res2 = nums.reduce((acc, val) => acc + val, 0);
console.log(res2);

// forEach method
console.log(nums.forEach((num) => console.log(num * 2)));
