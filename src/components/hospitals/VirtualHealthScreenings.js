import React, { useState, useEffect } from 'react';
import './VirtualHealthScreenings.css'; // Import your CSS styles

const VirtualHealthScreenings = () => {
  const [screeningResults, setScreeningResults] = useState([]);
  const [newScreening, setNewScreening] = useState({ name: '', status: '', date: '' });

  useEffect(() => {
    // Mock initial data
    setScreeningResults([
      { name: 'Blood Pressure', status: 'Normal', date: '2024-04-05' },
      { name: 'Cholesterol Level', status: 'High', date: '2024-04-03' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setNewScreening({ ...newScreening, [e.target.name]: e.target.value });
  };

  const addScreening = () => {
    setScreeningResults([...screeningResults, newScreening]);
    setNewScreening({ name: '', status: '', date: '' }); // Reset input
    alert('New screening added!');
  };

  return (
    <div className="virtual-health-screenings">
      <h2>Virtual Health Screenings</h2>
      <p>Provide patients with real-time health screenings using advanced virtual tools.</p>

      <ul>
        {screeningResults.map((result, index) => (
          <li key={index}>
            <strong>{result.name}</strong> - Status: {result.status} - Date: {result.date}
          </li>
        ))}
      </ul>

      <h3>Add New Screening</h3>
      <input
        type="text"
        name="name"
        placeholder="Screening Name"
        value={newScreening.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={newScreening.status}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={newScreening.date}
        onChange={handleInputChange}
      />
      <button onClick={addScreening}>
        Add Screening
      </button>

      <button onClick={() => alert('Schedule New Screening')}>
        Schedule New Screening
      </button>
    </div>
  );
};

export default VirtualHealthScreenings;
