import React, { useState } from 'react';

const PatientSafetyInitiatives = () => {
  const [initiatives, setInitiatives] = useState([
    { name: 'Hand Hygiene Campaign', progress: 85 },
    { name: 'Fall Prevention Protocol', progress: 90 },
  ]);

  return (
    <div>
      <h2>Patient Safety Initiatives</h2>
      <p>Track ongoing patient safety programs and their progress.</p>
      <ul>
        {initiatives.map((initiative, idx) => (
          <li key={idx}>
            {initiative.name} - Progress: {initiative.progress}%
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Launch New Safety Initiative')}>
        Launch New Initiative
      </button>
    </div>
  );
};

export default PatientSafetyInitiatives;
