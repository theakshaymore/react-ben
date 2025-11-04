// Flatten an Array without Array.flat()
function reduceFlatten(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(reduceFlatten(val));
    } else {
      return acc.concat(val);
    }
  }, []);
}
console.log(reduceFlatten([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9]));

function simpleFlatten(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(simpleFlatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

// console.log(simpleFlatten([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9]));

function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );
}
// console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9]));
// [1,2,3,4,5,6,7,8,10,11,9]
