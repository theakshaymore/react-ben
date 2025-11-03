let person1 = {
  firstname: "akshay",
  lastname: "more",
};
let person2 = {
  firstname: "rohit",
  lastname: "more",
};

let showFullName = function () {
  console.log(`Hi my name is ${this.firstname} ${this.lastname}`);
};

showFullName.call(person1);
showFullName.call(person2);
