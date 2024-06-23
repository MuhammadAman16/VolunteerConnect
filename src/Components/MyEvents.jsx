import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext.jsx";

const MyEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/events/my-events/${user.user.email}`
        );
        setEvents(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.user.email) {
      fetchEvent();
    }
  }, [user]);

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/events/${_id}`);
      setEvents(events.filter((event) => event._id !== _id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/events/${selectedEvent._id}`,
        selectedEvent
      );
      setEvents(
        events.map((event) =>
          event._id === selectedEvent._id ? selectedEvent : event
        )
      );
      setShowForm(false);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent({ ...selectedEvent, [name]: value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center bg-gray-200"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-32 h-32 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-500">{event.date}</p>
              <div className="flex space-x-2 mt-4">
                <button
                  className="bg-customgreen text-white px-4 py-1 rounded-2xl"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-2xl"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-customgreen1 text-white px-4 py-2 rounded-md"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] h-auto">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedEvent.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={selectedEvent.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={selectedEvent.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={selectedEvent.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-1 bg-gray-300 rounded-xl"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 text-white rounded-xl bg-customgreen1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEvents;
