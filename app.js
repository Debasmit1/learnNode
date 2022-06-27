//Modules
// const {john,peter} = require("./4-name")
const names = require("./4-name");
const sayHi = require("./5-util");

//import names from "./4-name";
sayHi("Debasmit");
sayHi(names.john);
sayHi(names.peter);
