import React, { useState } from 'react';

const InfectionControl = () => {
  const [infectionAlerts, setInfectionAlerts] = useState([
    { area: 'ICU', issue: 'MRSA detected', severity: 'High' },
    { area: 'ER', issue: 'C. difficile risk', severity: 'Medium' },
  ]);

  return (
    <div>
      <h2>AI-Assisted Infection Control</h2>
      <p>Monitor and respond to infection risks across hospital units.</p>
      <ul>
        {infectionAlerts.map((alert, idx) => (
          <li key={idx}>
            <strong>{alert.area}</strong>: {alert.issue} - Severity: {alert.severity}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Initiating Automated Infection Control Protocol')}>
        Initiate Protocol
      </button>
    </div>
  );
};

export default InfectionControl;
