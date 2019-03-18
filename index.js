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
app.post("/api/users", (req, res) => {
  const user = req.body;
  if (user.name && user.bio) {
    db.insert(user)
      .then(user => res.status(201).json(user))
      .catch(err => {
        return res.status(500).json({
          error: "There was an error while saving the user to the database"
        });
      });
  } else {
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(4000, () => {
  console.log(`The server is now running on port 4000`);
})