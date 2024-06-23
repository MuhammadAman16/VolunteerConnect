import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EventForm from "./EventForm"; // Adjust the path as per your project structure
import { AuthContext } from "../AuthContext"; // Import AuthContext

const Navbar = ({ toggleSidebar, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    if (user) {
      const userMail = user.user.email;
      setUserEmail(userMail);
    }
  }, [user]);
  console.log(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(""); // State for success message

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const handleAddEvent = () => {
    setIsModalOpen(true);
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
            className="text-base font-semibold bg-customgreen1 px-3 py-2 rounded-3xl text-white hover:text-gray-900"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <EventForm
            setIsModalOpen={setIsModalOpen}
            setSubmitMessage={setSubmitMessage}
            userEmail={userEmail}
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
