// Promise
// - it is an object, it is way to handle/manage asynchronous code in js compared to callbacks
// - avoids callback hell
// - states of promise
// -- pending - initial state
// -- fullfilled - operation susscessful
// -- rejected - operation failed
// -- prmise can be only change from pending to other state once - pending -> fulfilled or pending -> rejected - only once
// - used in fetch(), async/await, import

function addDataToDB(data) {
  let res = false;
  return res;
}

const promise = new Promise((fulfilled, rejected) => {
  let data = 5;
  if (addDataToDB(data)) {
    fulfilled(data);
  } else rejected("operation failed");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
