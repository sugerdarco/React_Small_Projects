import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice.js";

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!title) return;
        dispatch(addTodo(title));
        setTitle('');
    }

    return (
        <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                placeholder="Add a todo"
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
};

export default TodoForm;