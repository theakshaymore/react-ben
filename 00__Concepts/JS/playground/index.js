const person = {
  Rahul: 18,
  Raj: 19,
  Kunal: 9,
  Abhi: 17,
  Ajay: 25,
  Arjun: 68,
  Brijesh: 32,
};

const keys = Object.keys(person);

const adults = keys.filter((key) => person[key] >= 18);

const sorted = adults.sort((a, b) => person[a] - person[b]);

const sorted2 = adults.sort((a, b) => {
  let nameA = a.toUpperCase();
  let nameB = b.toUpperCase();

  return nameA > nameB ? 1 : -1;

  return 0;
});

console.log(sorted);
console.log(sorted2);

// const arr = Object.entries(person);
// const keys = Object.keys(person);
// const values = Object.values(person);
