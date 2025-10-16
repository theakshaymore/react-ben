function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(`Name: ${this.name}`);
};

const object = new Person("saket");
// object.getName();

class Student {
  constructor() {}

  getName() {
    return `inside the student class`;
  }
}

const obj = new Student();
console.log(obj.getName());

const obj2 = { __proto__: Student.prototype };

console.log(obj2.getName());
