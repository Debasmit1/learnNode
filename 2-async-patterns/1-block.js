const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.end("Home Page");
  }
  if (url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("Building About Page");
  }
  res.end("Error Page");
});

server.listen(4000, () => {
  console.log("Server is live on 4000...");
});
