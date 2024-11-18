import React, { useState, useMemo } from 'react';
import './DoctorAvailability.css'; // Import the CSS file

const DoctorAvailability = () => {
  // Example data - replace with real data as needed
  const [availability] = useState([
    { date: '2024-09-15', time: '1:00 PM - 3:00 PM', patient: 'John Doe', doctor: 'Dr. Smith', photo: 'https://via.placeholder.com/50' },
    { date: '2024-09-16', time: '9:00 AM - 11:00 AM', patient: 'Jane Smith', doctor: 'Dr. Johnson', photo: 'https://via.placeholder.com/50' },
    { date: '2024-09-17', time: '11:00 AM - 1:00 PM', patient: 'Emily Clark', doctor: 'Dr. Adams', photo: 'https://via.placeholder.com/50' },
    // Add more data for better testing
  ]);

  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState(filter);

  // Debounce the search input to limit the number of filter operations
  useMemo(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 300); // Delay of 300ms
    return () => {
      clearTimeout(handler);
    };
  }, [filter]);

  const filteredAvailability = useMemo(() => {
    return availability.filter(slot =>
      slot.doctor.toLowerCase().includes(debouncedFilter) ||
      slot.date.toLowerCase().includes(debouncedFilter) ||
      slot.time.toLowerCase().includes(debouncedFilter)
    );
  }, [debouncedFilter, availability]);

  const handleSearch = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleLearnMore = (doctor) => {
    alert(`Learn more about ${doctor}`);
  };

  return (
    <div className="doctor-availability-container">
      <h2>Doctor Availability</h2>
      <p>Here you can view and book available time slots for doctors.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by date, time, or doctor..."
          onChange={handleSearch}
        />
      </div>

      <table className="availability-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAvailability.length > 0 ? (
            filteredAvailability.map((slot, index) => (
              <tr key={index}>
                <td>{slot.date}</td>
                <td>{slot.time}</td>
                <td>
                  <div className="doctor-info">
                    <img src={slot.photo} alt={slot.doctor} className="doctor-photo" />
                    <span>{slot.doctor}</span>
                  </div>
                </td>
                <td>{slot.patient}</td>
                <td>
                  <button className="book-btn">Book Now</button>
                  <button className="learn-more-btn" onClick={() => handleLearnMore(slot.doctor)}>Learn More</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-results">No available slots found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorAvailability;
