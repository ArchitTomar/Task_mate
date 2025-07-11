import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-6 flex justify-between items-center shadow-lg px-10">
        <nav className="flex space-x-6">
          <Link to="/dashboard" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Dashboard</Link>
          <Link to="/projects" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Projects</Link>
          <Link to="/Issue" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Issues</Link>
          <Link to="/Create" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Task</Link>
          <Link to="/Create">
         <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-bold">
          Create
          </button>
</Link>
        </nav>

        <div className="flex-grow flex justify-center px-6">
          <div className="relative">
            <input type="text" placeholder="Search..." className="w-64 pl-10 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500" />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <div className="flex space-x-6 items-center text-2xl">
          <Link to="/settings" className="cursor-pointer hover:text-gray-400">⚙️</Link>
          <Link to="/profile" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-gray-600 shadow-md">
            👤
          </Link>
        </div>
      </header>

      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to TaskMate</h1>
        <p className="text-gray-400 mt-4 text-lg">Manage your tasks efficiently with a minimalistic approach.</p>
      </main>
    </div>
  );
};

export default HomePage;
