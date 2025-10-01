let res = true;

// global scope
function run() {
  if (res) {
    var a = 10;
  }
  console.log(a);
}

// block scope
function run() {
  if (res) {
    let a = 10;
  }
  console.log(a);
}

run();
