import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Homepage from "./Components/Homepage.jsx";
import Event from "./Components/Event.jsx";
import ViewEvent from "./Components/ViewEvent.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import MyEvents from "./Components/MyEvents.jsx";
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          {isLoggedIn ? (
            <>
              <Navbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/events" element={<Event />} />
                  <Route path="/events/:id" element={<ViewEvent />} />
                  <Route path="/my-events" element={<MyEvents />} />

                  <Route path="*" element={<Navigate to="/" />} />
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
