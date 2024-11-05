// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './app.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch('http://20.3.25.220:5000/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const addTodo = () => {
        fetch('http://20.3.25.220:5000/todos', {  // Ensure port 5000 is specified
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        }).then(res => res.json())
          .then(newTodo => setTodos([...todos, newTodo]));
        setText("");
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new to-do"
            />
            <button onClick={addTodo}>Add</button>
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
