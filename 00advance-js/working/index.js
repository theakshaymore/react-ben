// synchronous
// console.log("statment-1");
// console.log("statment-2");
// console.log("statment-3");
// let sum = 0;
// for (let i = 3000000000; i > 0; i--) {
//   sum = sum + i;
// }
// console.log("statment-4");

// asynchronous
console.log("statment-1");
console.log("statment-2");
console.log("statment-3");
setTimeout(() => {
  console.log("middle-statment");
}, 5000);
console.log("statment-4");
