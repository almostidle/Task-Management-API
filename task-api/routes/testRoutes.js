const express = require("express");
const router = express.Router();

// Fake database (in memory)
let tasks = [];

// Create a task
router.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Get all tasks
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

module.exports = router;
