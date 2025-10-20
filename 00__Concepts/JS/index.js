// Vinay Kumar
// 12:30
// Find the fibonacci series. using reccussion?

// 0,1,1,2,3

// run(num -2) + run(num -1) = run(2)
function run(num) {
  if (num <= 1) {
    return num;
  }

  // recussrion
  return run(num - 1) + run(num - 2);
}

const response = run(4);

console.log(response);
