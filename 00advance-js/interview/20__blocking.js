// console.log("Start");
// let count;
// setTimeout(() => {
//   console.log("settimeout");
//   count = 30;
// }, 3000);
// console.log("End:", count);

// let currentDate = new Date().getTime();
// console.log(currentDate);

// Using Promise
// console.log("Start");
// let count;

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     count = 30;
//     resolve(count);
//     reject("Not able to....");
//   }, 3000);
// })
//   .then((count) => {
//     console.log(count);
//     console.log("End");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   Using async await

console.log("start");
let count;

async function run() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      count = 99;
      resolve(count);
      //  reject("Error.......");
    }, 3000);
  });
  console.log("end");
}
run();
