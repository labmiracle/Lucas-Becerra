const express = require("express");
const app = express();
const path = require("path");
//Port changed
const port = 3000;

app.use((req, res, next) => {
  console.log('Current URL:' , req.url);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});