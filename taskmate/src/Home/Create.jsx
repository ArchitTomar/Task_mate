
import React from "react";

function Create() {

    return (
        <div className="bg-black text-white p-6 min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">Create ✚ </h2>

                <form action="#" method="POST" className="flex flex-col space-y-4">
                    <div className="mb-4">
                        <label htmlFor="projectName" className="block text-lg font-medium text-white text-left">Name</label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-lg font-medium text-white text-left">Type</label>
                        <select
                            id="type"
                            name="type"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="project">Project</option>
                            <option value="task">Task</option>
                            <option value="issue">Issue</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="projectLead" className="block text-lg font-medium text-white text-left">Project Lead</label>
                        <input
                            type="text"
                            id="projectLead"
                            name="projectLead"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            placeholder="Enter Project Lead Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="projectMembers" className="block text-lg font-medium text-white text-left">Project Members</label>
                        <select
                            id="projectMembers"
                            name="projectMembers"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            required
                        >
                            <option value="">Select Members</option>
                            <option value="member1">Member 1</option>
                            <option value="member2">Member 2</option>
                            <option value="member3">Member 3</option>
                            <option value="member4">Member 4</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="projectSummary" className="block text-lg font-medium text-white text-left">Project Summary</label>
                        <textarea
                            id="projectSummary"
                            name="projectSummary"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            placeholder="Enter Project Summary"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-lg font-medium text-white text-left">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            placeholder="Enter Project Description"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-lg font-medium text-white text-left">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="endDate" className="block text-lg font-medium text-white text-left">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dueDate" className="block text-lg font-medium text-white text-left">Due Date</label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="attachments" className="block text-lg font-medium text-white text-left">
                            Attachments</label>
                        <input
                            type="file"
                            id="attachments"
                            name="attachments"
                            className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md"
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="py-2 px-6 bg-cyan-600 text-white font-semibold rounded-md
                             hover:bg-cyan-700 transition duration-300 text-lg"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
