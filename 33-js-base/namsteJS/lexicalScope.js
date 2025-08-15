// Lexical scoping
function a() {
  var b = 10;
  c();
  function c() {
    var x = 0;
    console.log(d);
  }
}

var d = 20;
a();
