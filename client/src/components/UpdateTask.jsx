import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function UpdateTask({ tasks, setTasks }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { task } = location.state || {};

  const [updateTask, setUpdateTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    catagories: task.catagories,
    date: task.date,
    tags: task.tags,
    subTask: task.subtask,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, ...updateTask } : t))
    );
    navigate("/");
  };

  return (
    <div className="mt-20">
      <div className="add-task-page max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4">
          Update Task
        </h2>

        <form
          onSubmit={handleSubmit}
          id="task-form"
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
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
              id="title"
              name="title"
              placeholder="Enter task title"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={updateTask.title}
              onChange={handleChange}
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
              id="category"
              name="catagories"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={updateTask.catagories}
              onChange={handleChange}
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
              id="date"
              name="date"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={updateTask.date}
              onChange={handleChange}
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
              id="priority"
              name="priority"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={updateTask.priority}
              onChange={handleChange}
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
              id="description"
              name="description"
              placeholder="Enter task description"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              value={updateTask.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group mb-2">
            <label
              htmlFor="task-subtasks"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subtasks
            </label>
            <div className="space-y-2">
              <input
                type="text"
                name="subTask"
                id="subTask"
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none subtask-input"
                placeholder="Add a subtask"
                value={updateTask.subTask}
                onChange={handleChange}
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
              id="tags"
              name="tags"
              placeholder="Add tags (comma separated)"
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none"
              value={updateTask.tags}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 flex justify-center gap-6 mt-6">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
            <Link to={"/"}>
              <button
                type="button"
                id="cancel"
                className="w-full p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
