import React from 'react';

const AuditManagement = () => {
  const audits = [
    { area: 'Finance', status: 'Ongoing' },
    { area: 'Clinical Operations', status: 'Completed' },
  ];

  return (
    <div>
      <h2>Audit Management</h2>
      <p>Monitor and manage hospital audits.</p>
      <ul>
        {audits.map((audit, idx) => (
          <li key={idx}>
            {audit.area} - {audit.status}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Initiate New Audit')}>
        Initiate New Audit
      </button>
    </div>
  );
};

export default AuditManagement;
