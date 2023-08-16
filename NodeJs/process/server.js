const http = require("http");
const config = require("./config");

const server = http.createServer((req, res) => {
  res.writeHead(201, { "Content-Type": "text/plain" });
  res.end("Server Node");
});

server.listen(config, () => {
  console.log(`Sv http://localhost:${config.port}`);
});