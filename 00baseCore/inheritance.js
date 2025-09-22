const p1 = {
  fname: "akshay",
  lname: "more",
  getData() {
    return `${this.fname} ${this.lname}`;
  },
};

const p2 = Object.create(p1);
// console.log("before: ", p2.getData());
p2.__proto__.fname = "new";
// console.log("after: ", p2.getData());
// console.log("after: ", p1.getData());

let name = "akshay";

// console.log(name);
// console.log(name.__proto__);

// console.log(typeof name);

class Person {
  constructor() {}

  getName() {
    return "I'm inside the class";
  }
}

const obj1 = new Person();

console.log(obj1.getName());
console.log(obj1.__proto__.__proto__.__proto__);
