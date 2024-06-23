import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ setIsModalOpen, setSubmitMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    image: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      date: "",
      description: "",
      image: "",
    });
    setSubmitError(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/events",
        formData
      );
      setSubmitMessage(response.data.message); // Assuming response contains success message
      setFormData({
        name: "",
        date: "",
        description: "",
        image: "",
      });
    } catch (error) {
      setSubmitError("Failed to submit event information");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-[50%] h-auto">
      <h2 className="text-xl mb-4">Add Volunteer Event</h2>
      <form onSubmit={handleFormSubmit}>
        {submitError && <div className="text-red-600 mb-4">{submitError}</div>}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleCloseModal}
            className="mr-2 px-4 py-1 border rounded-xl bg-gray-200"
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1 border rounded-xl bg-customgreen1 text-white"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
