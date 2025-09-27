const { error } = require("console");
const fs = require("fs");

// fs.writeFileSync("./test.txt", "hey there");

// fs.writeFile("./test.txt", "hey there async", (err) => {});

const res = fs.readFileSync("./contacts.txt", "utf-8");
console.log(res);
