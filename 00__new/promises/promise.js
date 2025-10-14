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
  let res = true;
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

const url = "https://akshaymore.com/rest.json";
const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
  url
)}`;
const myPromise = fetch(proxyUrl);

myPromise
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
