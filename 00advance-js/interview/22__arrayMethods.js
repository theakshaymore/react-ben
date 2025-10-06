"use strict";

// map
let arr = [1, 9, 5, 7, 8];

// const res = arr.map((i) => console.log(i));

// -------------------------------------------------

// filter
const res = arr.filter((i) => i % 2 == 0);
const res2 = arr.filter((i) => i > 5);

// console.log(res2);

// -------------------------------------------------

// reduce

// reduce(function(){accumiation, currentValue}, initial value)

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

// console.log(output);

const max = arr.reduce((acc, curr) => {
  if (curr > acc) acc = curr;
  return acc;
}, 0);

// console.log(max);

// -------------------------------------------------------

// real life example

const data = [
  { firstname: "akshay", lastname: "more" },
  { firstname: "rohit", lastname: "sawant" },
  { firstname: "pd", lastname: "more" },
  { firstname: "akshayzzz", lastname: "morre" },
];

// const response = data.map((i) => {
//   return i.firstname + " " + i.lastname;
// });

// console.log(response);

// const response = data.reduce((acc, curr) => {
//   acc = curr.firstname + " " + curr.lastname;
//   console.log(acc);
// }, "");
