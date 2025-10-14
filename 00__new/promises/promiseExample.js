function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch user successfully...");
      resolve({ name: "akshay", age: 20 });
    }, 3000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch posts successfully...", userId);
      resolve([
        { id: 101, title: "Post 1" },
        { id: 102, title: "Post 2" },
      ]);
    }, 3000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch comments successfully...", postId);
      resolve([{ id: 1001, comment: "Nice!" }]);
    }, 3000);
  });
}

fetchUser()
  .then((userId) => {
    return fetchPosts(userId.name);
  })
  .then((postId) => {
    return fetchComments(postId[0].id);
  })
  .catch((err) => console.log("error in callback....", err));
