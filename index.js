// implement your API here
const db = require('./data/db');
const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(4000, () => {
  console.log(`The server is now running on port 4000`);
})