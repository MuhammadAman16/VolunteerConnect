import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration purposes
const mockEvents = [
  {
    id: 1,
    name: "ABC Day 2024",
    description: "Join us at our annual volunteer event to make a difference in the community.",
    startDate: "2024-11-05",
    endDate: "2024-11-07",
    imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  },
  {
    id: 2,
    name: "Event 2",
    description: "Description 2",
    startDate: "2024-10-15",
    endDate: "2024-10-16",
    imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
];

const MyEvents = () => {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update event logic here
    setEvents(events.map(event => event.id === selectedEvent.id ? selectedEvent : event));
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent({ ...selectedEvent, [name]: value });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center"
          >
            <img
              src={event.imageUrl}
              alt={event.name}
              className="w-32 h-32 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-500">
                {event.startDate} to {event.endDate}
              </p>
              <div className="flex space-x-2 mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-2xl"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-2xl"
                  onClick={() => handleDelete(event.id)}
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
                  value={selectedEvent.startDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={selectedEvent.endDate}
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
                  name="imageUrl"
                  value={selectedEvent.imageUrl}
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
                  className="px-4 py-1  text-white rounded-xl bg-customgreen1"
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
