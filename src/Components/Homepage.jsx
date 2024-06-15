import React from 'react';
import { Link } from 'react-router-dom';

const featuredEvents = [
  {
    id: 1,
    name: 'ABC Day 2024',
    date: '2024-11-05 to 2024-11-07',
    description: 'Join us at our annual volunteer event to make a difference in the community.',
    image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
  },
  {
    id: 2,
    name: 'EFG Day 2024',
    date: '2024-12-10 to 2024-12-12',
    description: 'Description of another featured event.',
    image: 'https://conncf.org/wp-content/uploads/2022/08/Volunteer_Banner-1200x364.jpg'
  },
  {
    id: 3,
    name: 'HIJ Day 2024',
    date: '2024-11-05 to 2024-11-07',
    description: 'Join us at our annual volunteer event to make a difference in the community.',
    image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
  },
  {
    id: 4,
    name: 'XYZ Featured Event',
    date: '2024-12-10 to 2024-12-12',
    description: 'Description of another featured event.',
    image: 'https://conncf.org/wp-content/uploads/2022/08/Volunteer_Banner-1200x364.jpg'
  },
  // Add more events as needed
];

const Homepage = () => {
  return (
    <div className="bg-customgreen2 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-customgreen2 w-12 h-12 mx-auto flex items-center justify-center rounded-full">
            <svg className="h-6 w-6 text-customgreen" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl font-semibold">Join Us!</h2>
          <p className="mt-2 text-gray-600">Become a volunteer and contribute back to the community.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-customgreen2 w-12 h-12 mx-auto flex items-center justify-center rounded-full">
            <svg className="h-6 w-6 text-customgreen" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 7V4H5v3H2v2h20V7h-3zM3 10v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10H3zm5 8v-6h4v6H8zm6 0v-6h4v6h-4z" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl font-semibold">Explore Events</h2>
          <p className="mt-2 text-gray-600">Discover volunteering events on campus or in your neighbourhood.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-customgreen2 w-12 h-12 mx-auto flex items-center justify-center rounded-full">
            <svg className="h-6 w-6 text-customgreen" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm4 0h2v-2H7v2zm0-4h2v-2H7v2zm8 8h-2v-6h2v6zm4 0h-2v-6h2v6zM7 17H5v-2h2v2zm8-4h-2v-6h2v6zm0-8h-2V5h2v2zm4 0h-2V5h2v2zM3 9h2V7H3v2zm16-4h-6V3h6v2zm-8 0h-6V3h6v2zM3 5V3h6v2H3z" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl font-semibold">Track Involvement</h2>
          <p className="mt-2 text-gray-600">Record your activities to showcase your involvement.</p>
        </div>
      </div>

      {/* Featured Events */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
        {featuredEvents.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md flex mb-6">
            <img
              src={event.image}
              alt={event.name}
              className="w-1/4 h-auto rounded-lg"
            />
            <div className="ml-6">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-4 text-gray-700">{event.description}</p>
              <Link to="/events">
                <button className="mt-4 bg-customgreen text-white px-4 py-2 rounded-full">
                  View Event
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
