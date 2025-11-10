function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

// greet("akshay", function () {
//   console.log("how are you?");
// });

// real world example

// Fetching data from API
function fetchUser(userId, callback) {
  console.log("Fetching user...");

  // Simulate API call
  setTimeout(() => {
    const user = { id: userId, name: "Alice" };
    callback(user); // Execute callback with data
  }, 1000);
}

fetchUser(123, function (user) {
  console.log("User received:", user.name);
});
