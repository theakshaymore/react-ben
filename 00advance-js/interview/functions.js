// run();
// get();

var get = function run() {
  console.log("running statment....");
};

// function statment
// --function declaration
// --hoisted
function run() {
  //
}

// function expression
// --anonymous function
// --not hoisted
var run = function () {
  //
};

// named function expression
const run2 = function get() {
  //
};

// First class function
function run3() {
  //
}

function pass() {
  //
}
run3(pass);
