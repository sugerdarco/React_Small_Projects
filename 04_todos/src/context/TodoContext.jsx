import {createContext, useContext} from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Todo 1',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, newTitle) => {},
    toggleComplete: (id) => {},
});

const useTodo = () => {
    return useContext(TodoContext);
}

const TodoProvider = TodoContext.Provider;

export { TodoProvider, useTodo };