function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  inner();
}

let instance = outer;

instance();
instance();
instance();

// When a function remembers its lexical environment even after the outer function has finished executing.

// Think of it as: A function carrying its environment with it, like a backpack.

let obj = {
  name: "akshay",
};

const s = obj;

s.name = "new name";

// console.log((s.name = "more"));
console.log(s.name);
