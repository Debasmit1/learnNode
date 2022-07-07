const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
