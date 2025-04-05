import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TodoCard = ({ task, setTasks }) => {
  const [deleteError, setDeleteError] = useState(null);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    try {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      setDeleteError(error.message);
    }
  };
  const handleClick = () => {
    navigate(`/updatetask/${task.id}`, { state: { task } });
  };
  // Determine priority color
  const getPriorityColor = () => {
    switch (task.priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  // Determine category color
  const getCategoryColor = () => {
    const colors = [
      "bg-purple-500",
      "bg-blue-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ];
    const index =
      Math.abs(
        task.catagories
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0)
      ) % colors.length;
    return colors[index];
  };

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        {/* Title and Priority */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-gray-800 truncate">
            {task.title}
          </h2>
          <span
            className={`${getPriorityColor()} text-white text-xs font-bold px-2 py-1 rounded-full`}
          >
            {task.priority}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{task.description}</p>

        {/* Time - Made bold and attractive */}
        <div className="mb-4">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Due
          </span>
          <p className="text-xl font-bold text-gray-800">
            <span className="text-indigo-600">{task.date}</span>
          </p>
        </div>

        {/* Category and Action Buttons */}
        <div className="flex justify-between items-center">
          <span
            className={`${getCategoryColor()} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {task.catagories}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleClick(task.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>

            <button
              onClick={() => handleDelete(task.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p>{deleteError}</p>
    </div>
  );
};

export default TodoCard;
