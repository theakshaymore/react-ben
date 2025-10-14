async function run() {
  return "runnning......";
}

// IMP: way 01
// run().then((res) => console.log(res));

// IMP: way 02
async function main() {
  const result = await run();
  console.log(result); // "running......"
}
// main();

// .............................................................

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 resolved......");
  }, 10000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved......");
  }, 5000);
});

async function handlePromise() {
  console.log("before promise starts.....");
  //   const response1 = await myPromise1;
  //   console.log("promise 1 done executing!");
  //   console.log(response1);

  //   const response2 = await myPromise2;
  //   console.log("promise 2 done executing!");
  //   console.log(response2);

  const [response1, response2] = await Promise.all([myPromise1, myPromise2]);

  console.log(response1);
  console.log(response2);
}

handlePromise();

// handlePromise()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
