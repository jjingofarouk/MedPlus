import React, { useState } from 'react';

const MedicalRecords = () => {
  const [records] = useState([]);

  const handleAddRecord = (e) => {
    e.preventDefault();
    // Add record logic here
  };

  return (
    <div className="medical-records-container">
      <h2>Medical Records</h2>
      <form onSubmit={handleAddRecord}>
        <label>
          Record Title:
          <input type="text" />
        </label>
        <label>
          Description:
          <textarea />
        </label>
        <button type="submit">Add Record</button>
      </form>
      <div className="records-list">
        <h3>Medical Records List</h3>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalRecords;
