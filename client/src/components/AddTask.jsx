import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddTask({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [catagories, setCatagories] = useState("work");
  const [date, setDate] = useState("00:00");
  const [priority, setPriority] = useState("Low");
  const [description, setDescription] = useState("");
  const [subtask, setSubTask] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !catagories || !date || !priority || !description) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      catagories,
      date,
      priority,
      description,
      subtask,
      tags,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    // console.log(tasks);
    console.log([...tasks, newTask]);
  };

  return (
    <div className="mt-20">
      <div className="add-task-page  max-w-xl mx-auto bg-white p-6  rounded-lg shadow-lg">
        {/* Title Section */}
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4">
          Add New Task
        </h2>

        {/* Form Section */}
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
              id="task-title"
              placeholder="Enter task title"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none "
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setCatagories(e.target.value)}
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
              onChange={(e) => setDate(e.target.value)}
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
              onChange={(e) => setPriority(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setSubTask(e.target.value)}
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
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Centered Submit and Cancel Buttons */}
          <div className="col-span-2 flex justify-center gap-6 mt-6">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Task
            </button>
            <Link to={"/"}>
              <button
                type="button"
                id="close-add-task-page"
                className="w-full p-2  bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
