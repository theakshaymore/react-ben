// const data = {
//   fname: "akshay",
//   lname: "more",
//   isMarried: false,
//   getAge: function age() {
//     console.log("age");
//   },
// };

// console.log(data);

// Functional Constructor
// function Person(fname, lname, contact) {
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;

//   this.getData = function () {
//     console.log(this.fname + " " + this.lname);
//   };
// }

// Es6

class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }

  getContact() {
    console.log(this.contact);
  }

  getDetails() {
    console.log(this.fname, this.lname);
  }
}

const p1 = new Person("akshay", "more", "8888888");
const p2 = new Person("john", "more", "9999999");

console.log(p1);
