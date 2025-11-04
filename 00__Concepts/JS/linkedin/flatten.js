// Flatten an Array without Array.flat()
function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );
}
console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9]));
