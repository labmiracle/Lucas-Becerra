const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('First server Express');
});

app.get('/yo', (req, res) => {
    res.send('Added route /yo');
  });

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});