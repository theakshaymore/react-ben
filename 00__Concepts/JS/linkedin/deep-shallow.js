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

// shallowCopy.name = "rohit";
shallowCopy.address.city = "delhi";

console.log(shallowCopy.address.city);
console.log(person.address.city);
