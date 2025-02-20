import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-10 border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left Section - Branding */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">TaskMate</h2>
          <p className="text-gray-400 text-sm mt-2">
            Simplifying team collaboration & task management.
          </p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>

      </div>

      
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} TaskMate. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
