import React, { useState } from 'react';

const CommunityHealthPrograms = () => {
  const [programs, setPrograms] = useState([
    { name: 'Diabetes Management', impact: 'High', participants: 1500 },
    { name: 'Nutrition Awareness', impact: 'Medium', participants: 800 },
    { name: 'Vaccination Drives', impact: 'Very High', participants: 3500 },
  ]);

  return (
    <div>
      <h2>Community Health Programs</h2>
      <p>Track and manage health programs aimed at improving community well-being.</p>
      <ul>
        {programs.map((program, index) => (
          <li key={index}>
            <strong>{program.name}</strong> - Impact: {program.impact} - Participants: {program.participants}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Launch New Program')}>
        Launch New Program
      </button>
    </div>
  );
};

export default CommunityHealthPrograms;
