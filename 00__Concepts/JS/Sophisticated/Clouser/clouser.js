// function outer(num) {
//   let count = 100;

//   function inner() {
//     count = count + num;
//     console.log("count incremented.. " + count);
//   }
//   return inner;
// }

// const run = outer(5);
// console.log(run());

function VCET(newJoinee) {
  let students = 100;

  function admission() {
    students = students + newJoinee;
    console.log("admission done.. " + students);
    function smallOperation() {
      console.log("Small operation.. " + students);
    }
    smallOperation();
  }
  return admission;
}

const admissionProcess = VCET(10);
console.log(admissionProcess());
