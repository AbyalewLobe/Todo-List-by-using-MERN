import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loadding, setLoadding] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);

    try {
      setLoadding(true);
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("API Response:", data);
      if (data.success === false) {
        setLoadding(false);
        setError(data.message);
        return;
      }
      setLoadding(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setLoadding(false);
      setError(error.message);
      console.error("Signup Error:", error);
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
            Sign Up
          </h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
              onChange={handleChange}
            />
          </div>

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
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter your password Again"
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loadding}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 transition hover:bg-blue-600 disabled:opacity-80 hover:opacity-95"
          >
            {loadding ? "Loadind" : "Sign Up"}
          </button>
          <p className="text-red-700">{error}</p>

          <p className="text-center mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-500 font-light hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
