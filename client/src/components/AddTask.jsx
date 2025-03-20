import React from "react";

export default function AddTask() {
  return (
    <div className="mt-20">
      <div className="add-task-page  max-w-xl mx-auto bg-white p-6  rounded-lg shadow-lg">
        {/* Title Section */}
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4">
          Add New Task
        </h2>

        {/* Form Section */}
        <form id="task-form" className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Column */}
          <div className="form-group mb-2">
            <label
              htmlFor="task-title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Task Title
            </label>
            <input
              type="text"
              id="task-title"
              placeholder="Enter task title"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-category"
              className="block text-gray-700 font-semibold mb-2"
            >
              Category
            </label>
            <select
              id="task-category"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none "
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-due-date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Due Date
            </label>
            <input
              type="date"
              id="task-due-date"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-priority"
              className="block text-gray-700 font-semibold mb-2"
            >
              Priority
            </label>
            <select
              id="task-priority"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none "
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Right Column */}
          <div className="form-group mb-2">
            <label
              htmlFor="task-description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Task Description
            </label>
            <textarea
              id="task-description"
              placeholder="Enter task description"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            ></textarea>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-subtasks"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subtasks
            </label>
            <div id="subtasks-container" className="space-y-2">
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none  subtask-input"
                placeholder="Add a subtask"
              />
            </div>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-tags"
              className="block text-gray-700 font-semibold mb-2"
            >
              Tags
            </label>
            <input
              type="text"
              id="task-tags"
              placeholder="Add tags (comma separated)"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none  "
            />
          </div>

          {/* Centered Submit and Cancel Buttons */}
          <div className="col-span-2 flex justify-center gap-6 mt-6">
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Task
            </button>
            <button
              type="button"
              id="close-add-task-page"
              className="w-1/2 p-1  bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
