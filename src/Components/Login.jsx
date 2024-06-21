import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../AuthContext.jsx";

const Login = ({ onLogin }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the login API
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log(response.config.data);
        // Call the onLogin function passed via props
        onLogin(response.data);
        login(response.config.data);
        // Navigate to the dashboard or home page after successful login
        navigate("/"); // Adjust the route as necessary
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-customgreen2 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          New user?{" "}
          <Link to="/signup" className="text-customgreen">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
