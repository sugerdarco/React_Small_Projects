import {createSlice} from "@reduxjs/toolkit";
import {_addTodo, _removeTodo, _updateTodo, _toggleTodo} from "./todoFunctions.js";

const initialState = {
    todos: [{id: 1, title: 'Todo 1', done: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: _addTodo,
        removeTodo: _removeTodo,
        updateTodo: _updateTodo,
        toggleTodo: _toggleTodo
    }
})

export const {addTodo, removeTodo, updateTodo,toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;