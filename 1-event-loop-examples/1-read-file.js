const { readFile } = require("fs");

console.log("Started first Text");

readFile("../content/first.txt", "utf-8", (req, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed first Text");
});

console.log("Starting next task");
