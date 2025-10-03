// var count = 0

function bank(creditAmount) {
  let totalBalance = 100;
  function inside() {
    console.log(totalBalance + creditAmount);
    console.log("Money Added");
  }
  return inside;
}

var transaction = bank(10);
transaction();
