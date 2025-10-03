//
function run() {
  for (var i = 0; i <= 5; i++) {
    function inside(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    inside(i);
  }

  console.log("statement .......");
}

run();

// {
// var a = 5
// // setimeout(console.log(a);6
// // setimeout(console.log(a);6
// // setimeout(console.log(a);6
// // setimeout(console.log(a);6
// }

// {
//   let a = 0
//   setimeout(console.log(a);
// }
// {
//   let a = 5
//   setimeout(console.log(a);
// }
// {
//   let a = 5
//   setimeout(console.log(a);
// }
// {
//   let a = 5
//   // setimeout(console.log(a);
// }
