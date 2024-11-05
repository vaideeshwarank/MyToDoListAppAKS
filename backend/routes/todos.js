// routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Add a new to-do
router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        const todo = new Todo({ text });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: "Failed to create todo" });
    }
});

// Get all to-dos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch todos" });
    }
});

module.exports = router;
