"use strict";

// map
let arr = [1, 2, 5, 7, 8];

// const res = arr.map((i) => console.log(i));

// filter
const res = arr.filter((i) => i % 2 == 0);
const res2 = arr.filter((i) => i > 5);

// console.log(res2);

// reduce

// reduce(function(){accumiation, currentValue}, initial value)

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);
