const http = require("http");

//req -> Incoming Request
//res -> Outgoing response

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Node Js is super cool. Hey created by Debasmit!!!");
  }
  if (req.url === "/about") {
    res.end("Working on it");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(5000);
