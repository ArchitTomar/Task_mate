import { useState } from "react";

function InputVerification() {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");

    const handleVerify = () => {
        if (input.trim() !== "") {
            setMessage("Valid input!");
        } else {
            setMessage("Invalid input. Please enter a value.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black w-screen">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-white text-2xl text-center mb-4">Email Verification</h2>
                <input
                    type="text"
                    placeholder="Enter your input"
                    className="w-full p-3 rounded-md mb-4 bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleVerify}
                    className="w-full p-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
                >
                    Verify
                </button>
                {message && <p className="mt-4 text-white text-center">{message}</p>}
            </div>
        </div>
    );
}

export default InputVerification;
