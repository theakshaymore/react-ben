const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const shallow = { ...obj };
const deep = JSON.parse(JSON.stringify(obj));

obj.b.c = 42;

console.log(shallow.b.c); // 42 ❌ (affected by change)
console.log(deep.b.c); // 2 ✅ (not affected)

const person = {
  name: "akshay",
  age: 20,
  address: {
    city: "mumbai",
    zip: 400032,
  },
};

const shallowCopy = { ...person };
const deepCopy = JSON.parse(JSON.stringify(person));
const strucureCopy = structuredClone(person);

// shallowCopy.name = "rohit";
strucureCopy.address.city = "delhi";

console.log(strucureCopy.address.city);
console.log(person.address.city);

// Interview Answer Template

// "What's the difference between shallow and deep copy?"

// "A shallow copy copies only the first level of an object. Nested objects are copied by reference, so changes to nested properties affect the original.
// A deep copy recursively copies all levels, creating completely independent objects.
// For shallow copies, I'd use the spread operator {...obj}. For deep copies, I'd use structuredClone() in modern environments, or JSON.parse(JSON.stringify()) for simple objects without functions or special types."
// Which deep copy method do you prefer?
