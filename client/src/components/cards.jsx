import React from "react";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-2 ">
        <h3 className="text-xl font-semibold text-blue-500 mb-2 text-center">
          Task Title
        </h3>
        <p className="text-gray-700 text-base mb-4">Task description</p>

        {/* Categories */}
        <div className="flex justify-center gap-10 items-center mb-2">
          <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mr-2 mb-2">
            Category
          </span>
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-2">
            Priority
          </span>
        </div>

        {/* Date */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-600">
            Due Date:{" "}
          </span>
          <span className="text-gray-700">March 25, 2025</span>
        </div>

        {/* Subtasks */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-600">Subtasks:</span>
          <ul className="flex gap-5  list-disc pl-5 text-gray-700 text-sm">
            <li className="mr-3">Subtask </li>
            <li className="mr-3">Subtask </li>
            <li className="mr-3">Subtask </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
