function outer(num) {
  let count = 100;

  function inner() {
    count = count + num;
    console.log("count incremented.. " + count);
  }
  return inner;
}

const run = outer(5);
console.log(run());
