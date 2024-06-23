// src/Components/ViewEvent.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const ViewEvent = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  useEffect(() => {
    // Populate name and email with user information when user changes
    if (user && user.user) {
      setParticipantName(user.user.name);
      setParticipantEmail(user.user.email);
    }
  }, [user]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/participants`, {
        eventId: id,
        name: participantName,
        email: participantEmail,
      });
      setSubmitMessage(response.data.message);
      setParticipantName("");
      setParticipantEmail("");
    } catch (error) {
      setSubmitMessage("Failed to submit participant information");
    }
  };

  if (loading) {
    return <p>Loading event...</p>;
  }

  if (error) {
    return <p>Error loading event: {error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-12">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="mt-4 text-3xl font-bold">{event.name}</h1>
      <p className="mt-2 text-gray-600">{event.date}</p>
      <p className="mt-4 text-gray-700">{event.description}</p>

      <button
        className="mt-4 bg-customgreen text-white px-4 py-2 rounded-full"
        onClick={() => setShowForm(true)}
      >
        Join Event
      </button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Join Event</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                className="w-full border-gray-300 rounded-md px-3 py-2 mb-4"
                required
              />

              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={participantEmail}
                onChange={(e) => setParticipantEmail(e.target.value)}
                className="w-full border-gray-300 rounded-md px-3 py-2 mb-4"
                required
              />

              <button
                type="submit"
                className="bg-customgreen text-white px-4 py-2 rounded-full"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      )}

      {submitMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center">
            <p className="text-xl font-semibold">{submitMessage}</p>
            <button
              className="mt-4 bg-customgreen text-white px-4 py-2 rounded-full"
              onClick={() => {
                setShowForm(false);
                setSubmitMessage("");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewEvent;
