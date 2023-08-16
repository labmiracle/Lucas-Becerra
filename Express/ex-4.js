const express = require('express');
const app = express();
//Port changed
const port = 4567;

//Middleware

const middleware = (req, res, next) => {
    console.log('Current URL:', req.url);
    next();
  };
  
  app.use(middleware);

app.get('/', (req, res) => {
  res.send('First server Express');
});

app.get('/yo', (req, res) => {
    res.send('Added route /yo');
  });

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});