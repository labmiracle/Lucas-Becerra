const express = require('express');
const app = express();
//Port changed
const port = 4567;

app.get('/', (req, res) => {
  res.send('First server Express');
});

app.get('/yo', (req, res) => {
    res.send('Added route /yo');
  });

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});