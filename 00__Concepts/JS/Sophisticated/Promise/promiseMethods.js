// Promise.all([
//   Promise.resolve("A"),
//   Promise.resolve("B"),
//   Promise.reject("C failed"),
// ])
//   .then((values) => console.log(values))
//   .catch((err) => console.log("Error:", err));

// Promise.allSettled([
//   Promise.resolve(1),
//   Promise.reject("Error"),
//   Promise.resolve(3),
// ]).then((results) => console.log(results));

const p1 = new Promise((res) => setTimeout(() => res("🏃 A done"), 1000));
const p2 = new Promise((_, rej) => setTimeout(() => rej("💥 B failed"), 2000));
const p3 = new Promise((res) => setTimeout(() => res("🏃 C done"), 3000));
