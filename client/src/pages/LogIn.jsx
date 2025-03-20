import React from "react";
import { Link } from "react-router-dom";
export default function LogIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-900">
      <div className="flex justify-center items-center w-full h-screen bg-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="mb-6 text-blue-500 text-center text-2xl font-semibold">
            Login
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 transition hover:bg-blue-600">
            Login
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-light hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
