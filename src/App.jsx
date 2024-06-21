// src/App.jsx
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Homepage from "./Components/Homepage.jsx";
import Event from "./Components/Event.jsx";
import ViewEvent from "./Components/ViewEvent.jsx";

import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx"; // Import AuthProvider

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Example: set isLoggedIn to true upon successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Example: set isLoggedIn to false upon logout
  };

  return (
    <AuthProvider>
      {" "}
      {/* Wrap your app with AuthProvider */}
      <Router>
        <div>
          {isLoggedIn ? (
            <>
              <Navbar toggleSidebar={toggleSidebar} />
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/events" element={<Event />} />
                  <Route path="/events/:id" element={<ViewEvent />} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
