import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/cards";
export default function Home() {
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
            <button className="w-full py-2  bg-[#357abd] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              Today
            </button>
            <button className="w-full py-2  bg-[#357abd] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              Scheduled
            </button>
            <button className="w-full py-2  bg-[#357abd] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              All Tasks
            </button>
            <button className="w-full py-2 bg-[#357abd] text-white rounded-md transition hover:bg-white hover:text-blue-500">
              Completed
            </button>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                Work <span className="font-bold">5</span>
              </li>
              <li className="flex justify-between text-sm">
                Personal <span className="font-bold">3</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 overflow-y-auto">
          <h1 className="mb-6 text-2xl font-bold text-blue-500">Today Task</h1>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md transition hover:bg-blue-600">
            Add Task
          </button>
        </main>
      </div>
    </>
  );
}
