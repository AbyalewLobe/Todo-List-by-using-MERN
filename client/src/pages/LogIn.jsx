import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LogIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      console.log("Login Response:", data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-900">
      <div className="flex justify-center items-center w-full h-screen bg-blue-500">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="mb-6 text-blue-500 text-center text-2xl font-semibold">
            Login
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 transition hover:bg-blue-600"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="text-red-700">{error}</p>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-light hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
