const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs');
// fs.readFileSync;
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first}, ${second}`,
//   { flag: "a" }
// );
//If file mentioned is not present node will create a file

writeFileSync(
  "./content/newresult-sync.txt",
  `\nHere is the result : ${first} , ${second}`,
  { flag: "a" }
);

console.log("done with task");
console.log("starting with next task");
