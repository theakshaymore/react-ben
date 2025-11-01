const person = {
  name: "Rahul",
  age: 20,
};

function greet(greeting, desgination, companyName) {
  console.log(
    `${greeting} ${this.name}, I'm ${desgination} at ${companyName}.`
  );
}

greet.call(person, "Hello", "Developer", "Google");
