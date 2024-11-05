// src/components/TodoList.js
import React from 'react';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <li key={todo._id}>
                {todo.text}
            </li>
        ))}
    </ul>
);

export default TodoList;
