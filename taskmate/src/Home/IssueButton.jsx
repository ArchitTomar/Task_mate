import React, { useState } from "react";

function IssueButton() {
  const [creator, setCreator] = useState("member");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue Created Successfully!");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-8">Create Issue</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Project</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                placeholder="Enter project name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Issue Type</label>
              <select className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white" required>
                <option value="">Select issue type</option>
                <option value="bug">Bug</option>
                <option value="task">Task</option>
                <option value="story">Story</option>
              </select>
            </div>
          </div>

          {/* Issue Creator */}
          <div>
            <label className="block text-sm font-semibold mb-2">Issue Creator</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="member"
                  checked={creator === "member"}
                  onChange={(e) => setCreator(e.target.value)}
                />
                Member
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="admin"
                  checked={creator === "admin"}
                  onChange={(e) => setCreator(e.target.value)}
                />
                Admin
              </label>
            </div>
          </div>

          {/* Summary + Story Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Summary</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                placeholder="Enter summary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Story Points</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                placeholder="e.g. 5"
                min="1"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea
              rows="4"
              className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
              placeholder="Describe the issue"
              required
            ></textarea>
          </div>

          {/* Attachments + Team Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Attachments</label>
              <input
                type="file"
                className="w-full p-2 border border-gray-600 bg-gray-900 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Team Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                placeholder="Enter team name"
                required
              />
            </div>
          </div>

          {/* Assignee */}
          <div>
            <label className="block text-sm font-semibold mb-1">Assignee</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
              placeholder="Assign to"
              required
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Start Date</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">End Date</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Due Date</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-600 bg-gray-900 rounded-md text-white"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IssueButton;
