function outer() {
  var username = "akshay";
  console.log(s);
  a();
  function a() {
    let s = 9;
    console.log(username);
  }
}

outer();
// console.log(username);
