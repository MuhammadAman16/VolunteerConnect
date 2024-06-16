import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the register API
      const response = await axios.post("http://localhost:5000/api/register", {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        // Show success message
        alert("Account created successfully! Please login.");
        // Navigate to the login page
        navigate("/login");
      }
    } catch (error) {
      console.error("There was an error creating the account!", error);
      alert("There was an error creating the account! Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-customgreen2 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-customgreen text-white p-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-customgreen">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
