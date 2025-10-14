function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ User fetched");
      resolve("John");
    }, 1000);
  });
}

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("✅ Posts fetched");
      resolve(["Post 1", "Post 2"]);
      //   reject("errrrr");
    }, 4000);
  });
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Comments fetched");
      resolve(["Comment 1", "Comment 2"]);
    }, 1500);
  });
}

console.log("Starting all requests.....");

// Promise.all([getUser(), getPosts(), getComments()]).then((res) => {
//   console.log(res[0]);
//   console.log(res[0]);
//   console.log(res[0]);
// });

// Promise.race([getUser(), getPosts(), getComments()]).then((res) => {
//   console.log("Winner: ", res);
// });
