var myVar = 99;
let myLet = 99;

console.log(this.myVar);
console.log(this.myLet);

// Global Object Property
// var in global scope creates a property on window (in browsers)
// javascriptvar x = 10;
// console.log(window.x); // 10
// let does NOT create a window property
// javascriptlet x = 10;
// console.log(window.x); // undefined
