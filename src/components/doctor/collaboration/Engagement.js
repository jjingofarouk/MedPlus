import React, { useState } from 'react';
import './Common.css';

const Engagement = () => {
  const [communications, setCommunications] = useState([
    { id: 1, patient: 'John Doe', type: 'Reminder', status: 'Sent', date: '2024-10-05' },
    { id: 2, patient: 'Jane Smith', type: 'Follow-Up', status: 'Pending', date: '2024-10-06' },
  ]);

  const [newComm, setNewComm] = useState({ patient: '', type: '', status: 'Pending' });

  const handleEngagement = (e) => {
    e.preventDefault();
    if (newComm.patient && newComm.type) {
      setCommunications([...communications, { id: communications.length + 1, ...newComm }]);
      setNewComm({ patient: '', type: '', status: 'Pending' });
    }
  };

  return (
    <div className="engagement-container">
      <h2>Patient Engagement</h2>
      <form onSubmit={handleEngagement}>
        <input
          type="text"
          placeholder="Patient Name"
          value={newComm.patient}
          onChange={(e) => setNewComm({ ...newComm, patient: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Engagement Type (Reminder/Follow-Up)"
          value={newComm.type}
          onChange={(e) => setNewComm({ ...newComm, type: e.target.value })}
          required
        />
        <button type="submit" className="engage-btn">Log Communication</button>
      </form>

      <h3>Engagement History</h3>
      <ul className="engagement-list">
        {communications.map((comm) => (
          <li key={comm.id}>
            {comm.patient} - {comm.type} - {comm.status} on {comm.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Engagement;
