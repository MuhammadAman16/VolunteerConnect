import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        // Take only the first 5 events from the response
        setEvents(response.data.slice(0, 5));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error loading events: {error}</p>;
  }

  return (
    <div className="bg-customgreen2 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Your existing code for sections like 'Join Us!', 'Explore Events', 'Track Involvement' */}
      </div>

      {/* Featured Events */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white p-6 rounded-lg shadow-md flex mb-6"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-1/4 h-auto rounded-lg"
            />
            <div className="ml-6">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-4 text-gray-700">{event.description}</p>
              <Link to={`/events/${event._id}`}>
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
