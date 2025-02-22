import { useState } from "react";

function EmailVerification() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleVerify = () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage("Valid email!");
        } else {
            setMessage("Invalid email. Please enter a valid email address.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black w-screen">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-white text-2xl text-center mb-4">Email Verification</h2>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white mb-2">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-md bg-white text-black border border-gray-300 
                        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <button
                    onClick={handleVerify}
                    className="w-full p-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
                >
                    Verify Email
                </button>
                {message && <p className="mt-4 text-white text-center">{message}</p>}
            </div>
        </div>
    );
}

export default EmailVerification;
