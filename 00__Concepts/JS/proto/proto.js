const student1 = {
  fname: "saket",
  lname: "more",
  getFullname() {
    return `${this.fname} ${this.lname}`;
  },
};

// const student2 = Object.create(student1);
const student2 = {};
student2.__proto__ = student1;

// console.log(student2.getFullname());
// console.log(student2.fname);

// console.log(student1.__proto__);

let fullname = "akshay";

// let name = new String('akshay')

console.log(fullname.__proto__.__proto__.__proto__);
