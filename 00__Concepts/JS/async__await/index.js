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
  resolve("promise resolved......");
  reject("promise rejected......");
});

async function handlePromise() {
  const response = await myPromise;
  return response;
  //   console.log(response);
}

handlePromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
