function x() {
  for (var i = 1; i <= 5; i++) {
    function clouser(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
    clouser(i);
  }
}

x();
