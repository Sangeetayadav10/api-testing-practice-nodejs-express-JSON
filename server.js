const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "Sangeeta" },
  { id: 2, name: "Rahul" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST create user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  user.name = req.body.name;

  res.json({
    message: "User updated successfully",
    user: user
  });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});