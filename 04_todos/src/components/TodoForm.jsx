import React from 'react';
import {useTodo} from "../context/TodoContext.jsx";

const TodoForm = () => {
    const [todoTitle, setTodoTitle] = React.useState('');
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todoTitle) return;
        addTodo({id: Date.now(), title: todoTitle, completed: false});
        setTodoTitle('');
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Add a todo"
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
};

export default TodoForm;