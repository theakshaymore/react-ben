const person = {
  Rahul: 18,
  Raj: 19,
  Kunal: 9,
  Abhi: 17,
  Ajay: 25,
  Arjun: 68,
  Brijesh: 32,
};

for (let i in person) {
  if (person[i] >= 18) {
    console.log(i, person[i]);
  }
}

// console.log(person);

// console.log("--------------------------");

const arr = Object.entries(person);
const keys = Object.keys(person);
const values = Object.values(person);

// console.log(values);

// for (let i in values) {
//   console.log(values[i]);
// }
