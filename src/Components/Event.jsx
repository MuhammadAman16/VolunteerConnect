import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEvents(response.data);
      } catch (error) {
        setError("Error fetching events. Please try again later.");
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
    <div className="bg-customgreen2 p-4">
      <div className=" bg-white p-4 max-w-6xl mx-auto shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Upcoming Events</h1>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">All Events</h2>
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

export default Event;
