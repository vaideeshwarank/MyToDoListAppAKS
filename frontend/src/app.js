// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './app.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://vaideeshtest.com:5000';

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(`${API_BASE_URL}/todos`)
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(console.error);
    }, []);

    const addTodo = () => {
        fetch(`${API_BASE_URL}/todos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })
        .then(res => res.json())
        .then(newTodo => setTodos([...todos, newTodo]))
        .catch(console.error);
        setText("");
    };

    return (
        <div className="container">
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
