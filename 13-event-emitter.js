const { EventEmitter } = require("stream");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received from ${name} with id : ${id}`);
});
customEmitter.on("response", () => {
  console.log(`Some other work`);
});

customEmitter.emit(`response`, "Debasmit", 38);
