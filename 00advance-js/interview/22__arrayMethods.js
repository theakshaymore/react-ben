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
  { firstname: "akshay", lastname: "more", age: 10 },
  { firstname: "rohit", lastname: "sawant", age: 20 },
  { firstname: "pd", lastname: "more", age: 20 },
  { firstname: "akshayzzz", lastname: "morre", age: 13 },
];

// const response = data.map((i) => {
//   return i.firstname + " " + i.lastname;
// });

// console.log(response);

// const response = data.reduce((acc, curr) => {
//   acc = curr.firstname + " " + curr.lastname;
//   console.log(acc);
// }, "");

// { 10 : 1, 20: 2, 13: 1}

const response = data.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
  //   curr.age == acc[curr.age] ? (acc = acc + 1) : (acc = curr);
}, {});

console.log(response);
