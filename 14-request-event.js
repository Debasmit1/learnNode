const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end(`Welcome`);
// });

//Using Event Emitter API
const server = http.createServer();
// emits request event
// subsribe to it / listen to it /respond to it

server.on("request", (req, res) => {
  res.end("Hi getting ready for Job");
});

server.listen(5000);
