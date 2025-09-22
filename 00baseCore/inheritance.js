const p1 = {
  fname: "akshay",
  lname: "more",
  getData() {
    return `${this.fname} ${this.lname}`;
  },
};

const p2 = Object.create(p1);
console.log("before: ", p2.getData());
p2.__proto__.fname = "new";
console.log("after: ", p2.getData());
console.log("after: ", p1.getData());
