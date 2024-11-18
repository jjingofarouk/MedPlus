import React, { useState, useMemo } from 'react';
import './PatientAvailability.css'; // Import the CSS file

const PatientAvailability = () => {
  // Example data - replace with real data
  const [availability] = useState([
    { date: '2024-09-15', time: '10:00 AM - 12:00 PM', doctor: 'Dr. Smith', patient: 'John Doe', reason: 'Consultation', photo: 'https://via.placeholder.com/50' },
    { date: '2024-09-16', time: '2:00 PM - 4:00 PM', doctor: 'Dr. Johnson', patient: 'Jane Doe', reason: 'Routine Check-up', photo: 'https://via.placeholder.com/50' },
    { date: '2024-09-17', time: '11:00 AM - 1:00 PM', doctor: 'Dr. Adams', patient: 'Emily Clark', reason: 'Follow-up', photo: 'https://via.placeholder.com/50' },
  ]);

  const [filterDate, setFilterDate] = useState('');
  const [filterDoctor, setFilterDoctor] = useState('');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') setFilterDate(value);
    if (name === 'doctor') setFilterDoctor(value);
  };

  const filteredAvailability = useMemo(() => {
    return availability.filter(slot =>
      (filterDate === '' || slot.date === filterDate) &&
      (filterDoctor === '' || slot.doctor.toLowerCase().includes(filterDoctor.toLowerCase()))
    );
  }, [filterDate, filterDoctor, availability]);

  return (
    <div className="patient-availability-container">
      <h2>Patient Availability</h2>
      <p>View available time slots for patients and manage appointments.</p>

      <div className="filters">
        <label htmlFor="filterDate">Filter by Date:</label>
        <input 
          type="date" 
          id="filterDate" 
          name="date" 
          value={filterDate} 
          onChange={handleFilterChange} 
        />
        
        <label htmlFor="filterDoctor">Filter by Doctor:</label>
        <input 
          type="text" 
          id="filterDoctor" 
          name="doctor" 
          placeholder="Doctor's name" 
          value={filterDoctor} 
          onChange={handleFilterChange} 
        />
      </div>

      <table className="availability-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Reason</th>
            <th>Actions</th>
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
                <td>{slot.reason}</td>
                <td>
                  <button className="confirm-btn">Confirm</button>
                  <button className="notify-btn">Notify Patient</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-results">No available slots found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientAvailability;
