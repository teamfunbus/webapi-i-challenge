// implement your API here
const db = require("./data/db");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(err => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved" });
    });
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(4000, () => {
  console.log(`The server is now running on port 4000`);
})