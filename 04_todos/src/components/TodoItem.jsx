import {useState} from "react";
import {useTodo} from "../context/TodoContext.jsx";

const TodoItem = ({todo}) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoTitle, setTodoTitle] = useState(todo.title); // Set initial title from the todo prop
    const {updateTodo, deleteTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, title: todoTitle});
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black
                ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
            `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-
                    ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
                    ${todo.completed ? "line-through" : ""}`}
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
};

export default TodoItem;
