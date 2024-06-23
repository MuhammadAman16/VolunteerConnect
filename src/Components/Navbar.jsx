import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EventForm from "./EventForm"; // Adjust the path as per your project structure

const Navbar = ({ toggleSidebar, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(""); // State for success message
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const handleAddEvent = () => {
    setIsModalOpen(true);
  };

  const handleMyEvents = () => {
    navigate("/my-events");
    setIsMenuOpen(false); // Close the menu after navigation
  };

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <nav className="bg-white px-6 py-4 sticky top-0 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-4" onClick={toggleSidebar}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-customgreen1">
            Volunteer Connect
          </h1>
        </div>

        <div className="flex items-center">
          <button
            className="text-base font-semibold bg-customgreen1 px-3 py-2 rounded-3xl text-white hover:text-gray-900 mr-4"
            onClick={handleAddEvent}
          >
            Add Volunteer Event
          </button>
          <button
            className="text-base font-semibold bg-customgreen1 px-3 py-2 rounded-3xl text-white hover:text-gray-900 mr-4"
            onClick={handleLogout}
          >
            Logout
          </button>
          <div className="relative">
            <button
              className="text-base  px-3 py-2 rounded-full text-gray-900 font-extrabold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6h.01M12 12h.01M12 18h.01"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-5 w-48 bg-white  rounded-md shadow-lg z-50">
                <button
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700 "
                  onClick={handleMyEvents}
                >
                  My Events
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <EventForm
            setIsModalOpen={setIsModalOpen}
            setSubmitMessage={setSubmitMessage}
          />
        </div>
      )}

      {/* Successful submission popup */}
      {submitMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center">
            <p className="text-xl font-semibold">{submitMessage}</p>
            <button
              className="mt-4 bg-customgreen1 text-white px-4 py-2 rounded-full"
              onClick={() => setSubmitMessage("")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
