import React from "react";
import NavBar from "../components/NavBar";

import TodoCard from "../components/TodoCard";
import { Link } from "react-router-dom";

export default function Home({ tasks, setTasks, complete, setComplete }) {
  return (
    <>
      <NavBar />
      <div className="flex p-5 h-screen w-full bg-gray-100 text-gray-900">
        {/* Sidebar */}

        <aside className="w-64 bg-blue-500 text-white p-6 mt-4 rounded-lg flex flex-col">
          <h2 className="mb-4 text-xl font-bold">Dashboard</h2>
          <p className="mb-6 text-sm">Manage your tasks efficiently.</p>
          <div className="mb-8 flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold">Filters</h3>
            <button className="w-full py-2  bg-[#1b3d60] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              Today
            </button>
            <button className="w-full py-2  bg-[#1b3d60] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              Scheduled
            </button>
            <button className="w-full py-2  bg-[#1b3d60] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              All Tasks
            </button>
            <button className="w-full py-2 bg-[#1b3d60]  text-white rounded-md transition hover:bg-white hover:text-blue-500">
              Completed
            </button>
          </div>
          {/* ////// catagories */}
          <div className="mb-8 flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold">Catagories</h3>
            <li className="flex justify-between items-center group hover:bg-slate-800 px-2 py-1.5 rounded transition-colors">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Work
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                5
              </span>
            </li>
            <li className="flex justify-between items-center group hover:bg-slate-800 px-2 py-1.5 rounded transition-colors">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Personal
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                3
              </span>
            </li>
            <li className="flex justify-between items-center group hover:bg-slate-800 px-2 py-1.5 rounded transition-colors">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Shopping
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                2
              </span>
            </li>
            <li className="flex justify-between items-center group hover:bg-slate-800 px-2 py-1.5 rounded transition-colors">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Health
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">
                4
              </span>
            </li>
          </div>

          {/* ///// */}
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 overflow-y-auto">
          <h1 className="mb-6 text-2xl font-bold text-blue-500">Today Task</h1>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4">
            {tasks.map((task) => (
              <TodoCard
                key={task.id}
                task={task}
                setTasks={setTasks}
                complete={complete}
                setComplete={setComplete}
              />
            ))}
          </div>
          <Link to={"/addtask"}>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md transition hover:bg-blue-600">
              Add Task
            </button>
          </Link>
        </main>
      </div>
    </>
  );
}
