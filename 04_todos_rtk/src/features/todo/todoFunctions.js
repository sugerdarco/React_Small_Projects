import { nanoid } from "@reduxjs/toolkit";

const _addTodo = (state, action) => {
    const todo = { id: nanoid(), title: action.payload, done: false };
    state.todos.push(todo);
};

const _removeTodo = (state, action) => {
    const index = state.todos.findIndex(todo => todo.id === action.payload);
    if (index !== -1) {
        state.todos.splice(index, 1);
    }
};

const _updateTodo = (state, action) => {
    const index = state.todos.findIndex(todo => todo.id === action.payload.id);
    if (index !== -1) {
        state.todos[index].title = action.payload.title;
    }
};

const _toggleTodo = (state, action) => {
    const index = state.todos.findIndex(todo => todo.id === action.payload);
    if (index !== -1) {
        state.todos[index].done = !state.todos[index].done;
    }
};

export { _addTodo, _removeTodo, _updateTodo, _toggleTodo };
