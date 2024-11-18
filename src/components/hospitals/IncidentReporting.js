import React, { useState } from 'react';

const IncidentReporting = () => {
  const [incidentReports, setIncidentReports] = useState([
    { id: 1, type: 'Medication Error', status: 'Pending Review' },
    { id: 2, type: 'Patient Fall', status: 'Resolved' },
  ]);

  return (
    <div>
      <h2>Incident Reporting</h2>
      <p>Track and manage incidents in real-time.</p>
      <ul>
        {incidentReports.map((report, idx) => (
          <li key={idx}>
            {report.type} - {report.status}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Submit New Incident')}>
        Submit New Incident
      </button>
    </div>
  );
};

export default IncidentReporting;
