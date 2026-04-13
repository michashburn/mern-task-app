const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data (temporary)
let tasks = [];

// GET tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// POST task
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title
  };
  tasks.push(newTask);
  res.json(newTask);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));