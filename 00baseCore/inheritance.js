const p1 = {
  fname: "akshay",
  lname: "more",
  getData() {
    return `${this.fname} ${this.lname}`;
  },
};

const p2 = Object.create(p1);
console.log(p2.getData());
