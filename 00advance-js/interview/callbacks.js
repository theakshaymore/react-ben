// A callback is simply a function that is passed as an argument to another function,
// with the expectation that it will be "called back" (executed) at a later time

setTimeout(() => {
  console.log("Set timeout....");
}, 2000);

function a(b) {
  console.log("Function A");
  b();
}

a(function b() {
  console.log("Function B");
});

// callback using clouser
function runListener() {
  document.getElementById("btn").addEventListener("click", function run() {
    console.log("Button Clicked....");
  });
}

runListener();

// with once 
function runListener() {
  document.getElementById("btn").addEventListener(
    "click",
    function run() {
      console.log("Button Clicked....");
    },
    { once: true }
  );
}

runListener();
