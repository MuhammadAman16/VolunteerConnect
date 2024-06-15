import React, { useState } from 'react';

const VolunteerForm = ({ event, onClose }) => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isCheckboxChecked) {
            // Perform form submission logic here
            console.log('Form submitted');
            // Close the form
            onClose();
        } else {
            alert('Please confirm submission by ticking the checkbox.');
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-96">
                <button
                    className="absolute top-4 right-4 text-pink-500"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Volunteer for {event.title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={isCheckboxChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ml-2 text-gray-700">Confirm submission</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className={`bg-customgreen text-white px-4 py-2 rounded-2xl shadow-xl  ${!isCheckboxChecked && 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isCheckboxChecked}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VolunteerForm;
