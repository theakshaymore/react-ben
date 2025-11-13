function higherFunction(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  console.log("addition= ", a + b);
}
function sub(a, b) {
  console.log("subtraction= ", a - b);
}

higherFunction(5, 4, add);
higherFunction(5, 4, sub);
