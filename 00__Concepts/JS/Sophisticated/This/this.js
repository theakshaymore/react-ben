console.log(this);

const person = {
  name: "akshay",
  age: 20,
  //   greet: function () {
  //     return `hello ${this.name}`;
  //   },
  greet: () => {
    return `hello ${this.name}`;
  },
};

const res = person.greet().call(person);

console.log(res);
// res();
