// "use strict";

// console.log(this);

// a = "string";

// console.log(this.location.href);

// console.log(this.navigator.userAgent);

function run() {
  // depends on strict mode
  console.log(this);
}

// run();

// ...............................

const obj1 = {
  name: "akshay",
  runFunction: function () {
    console.log(this);
  },
};

// obj1.runFunction();

const obj2 = {
  name: "rohit",
};

// IMP: call()
// obj1.runFunction.call(obj2);

// ------------------------------

const student = {
  firstname: "akshayz",
  getname: function () {
    const run = () => {
      console.log(this);
    };
    run();
  },
};

// student.getname();

// ---------------------------------------

function collage() {
  this.teacher = "ss";

  setTimeout(() => {
    this.teacher = "hhhh";
    console.log(this.teacher);
  }, 2000);
}

const myCollage = new collage();

myCollage();
