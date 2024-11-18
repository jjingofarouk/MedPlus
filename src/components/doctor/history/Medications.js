import React from 'react';

const Medications = ({ medications }) => {
  if (!medications || medications.length === 0) return <p>No medications available.</p>;

  return (
    <div>
      <h3>Medications</h3>
      {medications.map((medication, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {medication.name || 'N/A'}</p>
          <p><strong>Dosage:</strong> {medication.dosage || 'N/A'}</p>
          <p><strong>Frequency:</strong> {medication.frequency || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default Medications;
