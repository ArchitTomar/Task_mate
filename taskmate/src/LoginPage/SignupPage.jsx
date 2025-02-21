import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    role: "user", // Default role
    profilePic: null, // File upload
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePic: e.target.files[0], // Store file object
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // Add API call or authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-6 text-center">Create An Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 
              focus:ring-2 focus:ring-cyan-500 focus:outline-none hover:bg-gray-600 transition-all duration-300 ease-in-out"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 
              focus:ring-2 focus:ring-cyan-500 focus:outline-none hover:bg-gray-600 transition-all duration-300 ease-in-out"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 
              focus:ring-2 focus:ring-cyan-500 focus:outline-none hover:bg-gray-600 transition-all duration-300 ease-in-out"
              required
            />
          </div>

          {/* Profile Picture Upload */}
          <div>
            <label className="block text-sm font-medium">Profile Picture</label>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 
              focus:outline-none hover:bg-gray-600 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 
              focus:ring-2 focus:ring-cyan-500 focus:outline-none hover:bg-gray-600 transition-all duration-300 ease-in-out"
              rows="3"
              placeholder="Write something about yourself"
            ></textarea>
          </div>

          {/* Role Selection (Admin/User) */}
          <div>
            <label className="block text-sm font-medium">Select Role:</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                  className="form-radio text-cyan-500 focus:ring-2 focus:ring-cyan-500 hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <span className="ml-2 hover:text-cyan-400 transition-all duration-300 ease-in-out">Admin</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={formData.role === "user"}
                  onChange={handleChange}
                  className="form-radio text-cyan-500 focus:ring-2 focus:ring-cyan-500 hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <span className="ml-2 hover:text-cyan-400 transition-all duration-300 ease-in-out">User</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 
            hover:to-blue-600 py-2 rounded-lg text-lg font-bold text-white transition transform hover:scale-105 duration-300 ease-in-out"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm mt-4 text-gray-400">
            Already have an account?{" "}
            <Link to="/LoginPage" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-all duration-300 ease-in-out">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
