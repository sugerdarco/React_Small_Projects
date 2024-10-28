import {useState} from "react";

function App() {
    const [color, setColor] = useState("bg-green-500");

    const changeBackground = (color) => {
        setColor(color);
    }

    return (
        <>
            <div className={`${color} h-screen transition-colors duration-500`}>
                <div className="fixed bottom-11 w-full flex justify-center">
                    <div className="text-white bg-amber-100 rounded-3xl p-3 flex justify-between mx-24 max-w-max">
                        <button onClick={() => changeBackground("bg-red-500")}
                                className="bg-red-600 rounded-2xl px-4 mx-4 hover:bg-opacity-90 hover:shadow">Red
                        </button>
                        <button onClick={() => changeBackground("bg-blue-500")}
                                className="bg-blue-600 rounded-2xl px-4 py-1.5 mx-4 hover:bg-opacity-90 hover:shadow">Blue
                        </button>
                        <button onClick={() => changeBackground("bg-black")}
                                className="bg-black rounded-2xl px-4 mx-4 hover:bg-opacity-90 hover:shadow">Black
                        </button>
                        <button onClick={() => changeBackground("bg-green-500")}
                                className="bg-green-600 rounded-2xl px-4 mx-4 hover:bg-opacity-90 hover:shadow">Green
                        </button>
                        <button onClick={() => changeBackground("bg-yellow-500")}
                                className="bg-yellow-600 rounded-2xl px-4 mx-4 hover:bg-opacity-90 hover:shadow">Yellow
                        </button>
                        <button onClick={() => changeBackground("bg-pink-500")}
                                className="bg-pink-600 rounded-2xl px-4 mx-4 hover:bg-opacity-90 hover:shadow">Pink
                        </button>
                        <button onClick={() => changeBackground("bg-violet-500")}
                                className="bg-violet-600 rounded-2xl px-4 mx-4 hover:bg-opacity-90 hover:shadow">Violet
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
