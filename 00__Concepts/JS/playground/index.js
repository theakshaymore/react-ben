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

const sortedByAge = [...adults].sort((a, b) => person[a] - person[b]);

const sortedByChar = [...adults].sort((a, b) => {
  let nameA = a[a.length - 1].toUpperCase();
  let nameB = b[b.length - 1].toUpperCase();

  return nameA > nameB ? 1 : -1;

  return 0;
});

console.log(sortedByAge);
console.log(sortedByChar);

// const arr = Object.entries(person);
// const keys = Object.keys(person);
// const values = Object.values(person);
