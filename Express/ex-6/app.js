const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 3000;

const characters = [
  { id: 1, name: "Lucia", nickname: "Lu" },
  { id: 2, name: "Romina", nickname: "Ro" },
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});
