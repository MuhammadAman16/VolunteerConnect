import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-md transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 p-6 z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-customgreen1">Volunteer Connect</h2>
          <button onClick={toggleSidebar}>
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav>
          <Link to="/" className="flex items-center mb-4 text-gray-700 hover:text-customgreen" onClick={toggleSidebar}>

            <svg className="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
            </svg>
            Home
          </Link>
          <Link to="/events" className="flex items-center mb-4 text-gray-700 hover:text-customgreen" onClick={toggleSidebar}>
            <svg
              className="h-5 w-5 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"

              viewBox="0 0 256 256"
              xmlSpace="preserve"
            >
              <g
                style={{
                  stroke: 'none',
                  strokeWidth: 0,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 10,
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 90 23.452 v -3.892 c 0 -6.074 -4.942 -11.016 -11.017 -11.016 H 68.522 V 4.284 c 0 -1.657 -1.343 -3 -3 -3 s -3 1.343 -3 3 v 4.261 H 27.477 V 4.284 c 0 -1.657 -1.343 -3 -3 -3 s -3 1.343 -3 3 v 4.261 H 11.016 C 4.942 8.545 0 13.487 0 19.561 v 3.892 H 90 z"
                  style={{
                    stroke: 'none',
                    strokeWidth: 1,
                    strokeDasharray: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    fill: 'rgb(0,0,0)',
                    fillRule: 'nonzero',
                    opacity: 1,
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 29.452 V 75.7 c 0 6.074 4.942 11.016 11.016 11.016 h 67.967 C 85.058 86.716 90 81.775 90 75.7 V 29.452 H 0 z M 25.779 72.18 h -7.376 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.376 c 1.657 0 3 1.343 3 3 S 27.436 72.18 25.779 72.18 z M 25.779 58.816 h -7.376 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.376 c 1.657 0 3 1.343 3 3 S 27.436 58.816 25.779 58.816 z M 25.779 45.452 h -7.376 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.376 c 1.657 0 3 1.343 3 3 S 27.436 45.452 25.779 45.452 z M 48.688 72.18 h -7.375 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.375 c 1.657 0 3 1.343 3 3 S 50.345 72.18 48.688 72.18 z M 48.688 58.816 h -7.375 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.375 c 1.657 0 3 1.343 3 3 S 50.345 58.816 48.688 58.816 z M 48.688 45.452 h -7.375 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.375 c 1.657 0 3 1.343 3 3 S 50.345 45.452 48.688 45.452 z M 71.597 72.18 h -7.376 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.376 c 1.657 0 3 1.343 3 3 S 73.254 72.18 71.597 72.18 z M 71.597 58.816 h -7.376 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.376 c 1.657 0 3 1.343 3 3 S 73.254 58.816 71.597 58.816 z M 71.597 45.452 h -7.376 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 7.376 c 1.657 0 3 1.343 3 3 S 73.254 45.452 71.597 45.452 z"
                  style={{
                    stroke: 'none',
                    strokeWidth: 1,
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    fill: 'rgb(0,0,0)',
                    fillRule: 'nonzero',
                    opacity: 1,
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            Events
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
