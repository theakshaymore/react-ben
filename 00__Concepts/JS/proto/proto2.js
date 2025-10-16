function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(`Name: ${this.name}`);
};

const object = new Person("saket");
object.getName();
