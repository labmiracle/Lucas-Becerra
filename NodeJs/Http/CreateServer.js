const http = require("http");

const port = 3000;
const server = http.createServer((req, res) => {
    
  if (req.url === "/miraclelab") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>miraclelab</h1>");

  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>about miraclelab</h1>");

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

//server port
server.listen(port, () => {
  console.log(`servidor http://localhost:${port}`);
});