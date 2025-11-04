let arr = [1, 2, 3, 4, 5];

// using reduce()
let res = arr.reduce((acc, val) => acc + val, 0);
// console.log(res);

// using recursion
function getSum(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + getSum(arr, index + 1);
}

console.log(getSum(arr));
