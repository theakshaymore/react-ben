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

const res = keys.filter((key) => person[key] >= 18);

const sorted1 = [...res].sort((a, b) => person[a] - person[b]);

const sorted2 = [...res].sort((a, b) => {
  //   let nameA = a[a.length - 1].toUpperCase();
  //   let nameB = b[b.length - 1].toUpperCase();
  let nameA = a.slice(-1).toUpperCase();
  let nameB = b.slice(-1).toUpperCase();

  return nameA - nameB ? 1 : -1;

  return0;
});

console.log(sorted1);
console.log(sorted2);

//
