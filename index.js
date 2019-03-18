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

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      return user
        ? res.status(200).json(user)
        : res.status(404).json({
            message: "The user with the specified ID does not exist."
          });
    })
    .catch(err => {
      return res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!user.name || !user.bio)
    return res
      .status(404)
      .json({
        errorMessage: "Please provide name and bio for the user."
})
      .end();

  db.update(id, user)
    .then(user => {
      if (!user)
        return res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      return res.status(200).json(user);
    })
    .catch(err => {
      return res.status(500).json({
        error: "The user information could not be modified."
      });
    });
});

app.listen(4000, () => {
  console.log(`The server is now running on port 4000`);
})