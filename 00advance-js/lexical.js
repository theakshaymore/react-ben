function run() {
  var a = 10;
  console.log(b);
  inside();
  function inside() {
    console.log("running inside function....");
    console.log(b);
  }
}

var b = 20;
run();
