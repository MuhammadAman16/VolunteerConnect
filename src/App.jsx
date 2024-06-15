// src/App.jsx
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Homepage from './Components/Homepage.jsx';
import Event from './Components/Event.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="content">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/events" element={<Event />} />
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
  );
};

export default App;
