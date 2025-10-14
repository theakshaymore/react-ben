function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch user successfully...");
    }, 3000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch posts successfully...");
    }, 3000);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch comments successfully...");
    }, 3000);
  });
}

fetchUser()
  .then(fetchPosts())
  .then(fetchComments())
  .catch((err) => console.log("error in callback...."));
