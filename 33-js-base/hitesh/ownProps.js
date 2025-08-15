Array.prototype.myProperty = "akshay";
let myArray = [1, 2, 3, 4, 5];

// console.log(myArray);

for (let i in myArray) {
  if (myArray.hasOwnProperty(i)) {
    console.log(i);
  }
}
