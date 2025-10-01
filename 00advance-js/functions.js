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

// ------------------------------------------------

var a = 10;
var a = 6;

console.log(a);

// -------------------------------------------------------

// var in global scope creates a property on window (in browsers)
var x = 10;
console.log(window.x); // 10

// let does NOT create a window property
let x = 10;
console.log(window.x); // undefined
