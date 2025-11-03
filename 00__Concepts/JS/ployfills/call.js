//SECTION: EXAMPLE 1
// // let person1 = {
//   firstname: "akshay",
//   lastname: "more",
// };
// let person2 = {
//   firstname: "rohit",
//   lastname: "more",
// };

// let showFullName = function () {
//   console.log(`Hi my name is ${this.firstname} ${this.lastname}`);
// };

// showFullName.call(person1);
// showFullName.call(person2);

// SECTION: example 2

function generateUserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  generateUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new createUser("akshaymore", "akshay@gmail.com", "123");
console.log(user);

// usage
// 1- method borrowing
// 2- this binding
