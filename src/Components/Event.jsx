import React, { useState } from 'react';
import VolunteerForm from './VForm.jsx';

const Event = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([
    {
      title: 'ABC Day 2024',
      description: 'On 5 Nov, NUS will shut down to recharge as a community. Held a day after the Deepavali public holiday, staff and students will get a long weekend to reconnect with family and enjoy time away from school and work.',
      date: 'November 5, 2024 - November 6, 2024',
      location: 'Home',
      club: 'Care Club',
      type: 'Local',
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'EFG Wel Day 2024',
      description: 'On 5 Nov, NUS will shut down to recharge as a community. Held a day after the Deepavali public holiday, staff and students will get a long weekend to reconnect with family and enjoy time away from school and work.',
      date: 'November 5, 2024 - November 6, 2024',
      location: 'Home',
      club: 'Care Club',
      type: 'Local',
      image: 'https://conncf.org/wp-content/uploads/2022/08/Volunteer_Banner-1200x364.jpg'
    },
    // Add more events here
    {
      title: 'HIJ WellNUS Day 2024',
      description: 'On 5 Nov, NUS will shut down to recharge as a community. Held a day after the Deepavali public holiday, staff and students will get a long weekend to reconnect with family and enjoy time away from school and work.',
      date: 'November 5, 2024 - November 6, 2024',
      location: 'Home',
      club: 'Care Club',
      type: 'Local',
      image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'XYZ Wel Day 2024',
      description: 'On 5 Nov, NUS will shut down to recharge as a community. Held a day after the Deepavali public holiday, staff and students will get a long weekend to reconnect with family and enjoy time away from school and work.',
      date: 'November 5, 2024 - November 6, 2024',
      location: 'Home',
      club: 'Care Club',
      type: 'Local',
      image: 'https://conncf.org/wp-content/uploads/2022/08/Volunteer_Banner-1200x364.jpg'
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSignUpClick = (event) => {
    setSelectedEvent(event);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4  bg-customgreen2 ">
      <div className=" bg-white p-4 max-w-6xl mx-auto  shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Upcoming Events</h1>
        <div className="flex justify-center">
          <button className="bg-customgreen text-white px-4 py-2 rounded-2xl">Join us now!</button>
        </div>
      </div>
      <div className="my-4 max-w-6xl mx-auto py-12 px-6  bg-customgreen2">
        <input
          type="text"
          placeholder="Search events"
          className="border outline-none rounded-lg shadow-lg p-2 w-full"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <h2 className="text-2xl font-bold mt-6 ml-1">Events</h2>
        <br></br>

        {filteredEvents.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-2xl flex mb-6">
            <img
              src={event.image}
              alt={event.title}
              className="w-1/4 h-auto rounded-lg"
            />
            <div className="ml-6">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-4 text-gray-700">{event.description}</p>
              <div className="flex items-center font-semibold mt-2">
                <span>{event.location}</span>
              </div>
              <div className="flex items-center font-semibold mt-2">
                <span>{event.club}</span>
              </div>
              <div className="flex items-center font-semibold mt-2">
                <span className="bg-customgray text-white px-3 py-1 rounded-full">{event.type}</span>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-customgreen text-white px-4 py-2 rounded-2xl"
                  onClick={() => handleSignUpClick(event)}
                >
                  Join Event
                </button>
              </div>
            </div>
          </div>
        ))}

        {selectedEvent && <VolunteerForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </div>
    </div>
  );
};

export default Event;
