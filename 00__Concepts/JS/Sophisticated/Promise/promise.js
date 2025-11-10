const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("promise resolve aplty...");
    } else {
      reject("promise rejected....");
    }
  }, 2000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("cleaning up.....");
  });
