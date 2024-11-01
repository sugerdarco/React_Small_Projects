import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggleTodo } from "../features/todo/todoSlice.js";

const TodoItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const dispatch = useDispatch();

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.done ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.done}
                onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded- ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.done ? "line-through" : ""}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.done) return;
                    if (isTodoEditable) {
                        dispatch(updateTodo({ id: todo.id, title }));
                    }
                    setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.done}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
};

export default TodoItem;
