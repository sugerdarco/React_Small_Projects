import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

    const passwordGenerator = useCallback(() => {
        let _password = "";
        let characters = "QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp";

        if (numberAllowed) characters += "1234567890";
        if (specialCharAllowed) characters += "!@#$%^&*()_+{}[]|\"<>\\?.,/";

        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random() * characters.length);
            _password += characters[charIndex];
        }
        setPassword(_password);
    }, [length, numberAllowed, specialCharAllowed]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

    const passwordRef = useRef(null);
    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg px-8 py-10 text-gray-800 max-w-md w-full space-y-6">
                <h1 className="text-3xl font-bold text-center text-blue-600">Password Generator</h1>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        ref={passwordRef}
                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none"
                    />
                    <button
                        className="bg-lime-500 px-4 py-2 rounded-lg text-white hover:bg-lime-600 transition"
                        onClick={copyToClipboard}
                    >
                        Copy
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-lg font-medium text-gray-600">Length: {length}</label>
                        <input
                            type="range"
                            min={6}
                            max={50}
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="w-2/3"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={numberAllowed}
                                onChange={() => setNumberAllowed((prev) => !prev)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="text-gray-700">Include Numbers</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={specialCharAllowed}
                                onChange={() => setSpecialCharAllowed((prev) => !prev)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="text-gray-700">Include Special Characters</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
