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

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved......");
  }, 5000);

  //   reject("promise rejected......");
});

async function handlePromise() {
  console.log("before promise.....");
  const response = await myPromise;
  //   return response;
  console.log(response);
  console.log("after promise.....");
}

handlePromise();

// handlePromise()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
