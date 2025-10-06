function fact(num) {
  if (num < 0) {
    console.log("Negetive Number");
  }
  if (num <= 1) {
    return 1;
  }
  // recussrion
  return num * fact(num - 1);
}

num = 5;
console.log(fact(-1));

// 5 *4*3*2*1
