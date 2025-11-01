const person = {
  name: "Rahul",
  age: 20,
};

function greet(greeting, desgination, companyName) {
  console.log(
    `${greeting} ${this.name}, I'm ${desgination} at ${companyName}.`
  );
}

// greet.call(person, "Hello", "Developer", "Google");

// greet.apply(person, ["Hi", "Engineer", "Intel"]);

// const bindRun = greet.bind(person, "Hello", "Developer", "Microsoft");
// bindRun();

// -----------------------------------------------------------------------------------------
// bind()

const student = {
  name: "akshay",
  getName() {
    return this.name;
  },
};

const output = student.getName;
// console.log(output());

const output2 = output.bind(student);
// console.log(output2());

// ---------------------------------------------------------------------------------------
// call()

const person1 = {
  name: "Rahul",
  age: 25,
};

const person2 = {
  name: "Priya",
  age: 30,
};

function introduce() {
  console.log(`I'm ${this.name}, ${this.age} years old`);
}

introduce.call(person1);
introduce.call(person2);
