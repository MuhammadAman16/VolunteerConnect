import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ toggleSidebar, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };


  if (location.pathname === '/login') {
    return null; 
  }

  return (
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
        <h1 className="text-2xl font-bold text-customgreen1">Volunteer Connect</h1>
      </div>

      <button className="text-base font-semibold bg-customgreen1 px-3 py-2 rounded-3xl text-white  hover:text-gray-900" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
