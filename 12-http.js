const { readFileSync, writeFileSync } = require("fs");

const httpFile = readFileSync("./app.js", "utf-8");

writeFileSync("./12-http.js", httpFile);
