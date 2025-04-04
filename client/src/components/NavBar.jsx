import React from "react";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-blue-500 p-4 text-white shadow-md rounded-b-lg ">
      {/* Logo */}
      <div className="flex self-center  gap-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-lg font-bold">Todo List</span>
      </div>

      {/* Search Input */}
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 w-60 rounded-md border-none outline-none text-gray-900 pr-10"
        />
        <IoSearchSharp className="absolute right-3 text-gray-500" />
      </div>

      {/* Sign Out Button */}
      <div className="flex gap-4">
        <IoIosNotifications className="size-6 self-center" />
        <Link to={"/login"}>
          <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md transition">
            Sign Out
          </button>
        </Link>
      </div>
    </nav>
  );
}
