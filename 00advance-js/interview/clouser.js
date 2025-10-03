// var count = 0

function bank(creditAmount) {
  let balance = 100;
  function inside() {
    console.log(balance + creditAmount);
    console.log("Money Added");
  }
  return inside;
}

let transaction = bank(10);
transaction();

// functional constructor
function run() {
  let count = 9;
  this.incrementCounter = function () {
    console.log(++count);
  };

  this.decrementCounter = function () {
    console.log(--count);
  };
}

let x = new run();
x.incrementCounter();
x.decrementCounter();
