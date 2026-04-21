const express = require('express');   // 1. Import express
const app = express();                // 2. Create app

app.use(express.json());              // 3. Middleware

// Sample data
let users = [
  { id: 1, name: "Sangeeta" },
  { id: 2, name: "Rahul" }
];

// GET API
app.get('/users', (req, res) => {
  res.json(users);
});

// POST API
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});