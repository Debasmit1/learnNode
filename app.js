//npm - global command comes with node
//npm --version

//local dependency - use it only in this particular project
// npm i <packageName>

//npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores imp info abt project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init
//npm init -y (everything default)

//package.json provides info abt the project as well as download the project dependencies

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
