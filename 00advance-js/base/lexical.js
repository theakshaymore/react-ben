function run() {
  var a = 10;
  //   console.log(c);
  inside();
  function inside() {
    var c = 99;
    console.log("running inside function....");
    console.log(b);
  }
}

var b = 20;
run();
