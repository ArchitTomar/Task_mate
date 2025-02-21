import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-screen min-h-screen flex items-center justify-center">
            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-center mb-2">Welcome Back!</h2>
                <p className="text-gray-400 text-center mb-6">
                    Unlock your journey with us! Sign in to access your personalized dashboard and stay ahead.
                </p>

                <form action="#" method="POST">
                    <div className="mb-4 text-left">
                        <label className="block text-gray-300 mb-2">Email Address</label>
                        <input type="email" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    </div>

                    <div className="mb-4 text-left">
                        <label className="block text-gray-300 mb-2">Password</label>
                        <input type="password" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                        <p className="text-gray-400 text-sm mt-1">Your credentials are safe with us. We use end-to-end encryption to protect your data.</p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="flex items-center text-gray-400">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-blue-400 hover:underline">Forgot Password?</a>
                    </div>

                    {/* ✅ Fixed the Link path to match the App.js route */}
                    <Link to="/HomePage" className="w-full block text-center p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition">
                        Ready to explore? Enter your details and step into a world of possibilities!
                    </Link>
                </form>

                <p className="text-gray-400 mt-4 text-center">
                    New here? Come and boost your productivity with us!  
                    <Link to="/SignupPage" className="text-blue-400 hover:underline"> Signup</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
