console.log(this);

const person = {
  name: "akshay",
  age: 20,
  greet: function () {
    return `hello ${this.name}`;
  },
  // greet: () => {
  //   return `hello ${this.name}`;
  // },
};

const res = person.greet.bind(person);

console.log(res());

// console.log(person.greet.call(person));
