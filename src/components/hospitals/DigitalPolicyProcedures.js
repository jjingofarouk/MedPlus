import React, { useState } from 'react';

const DigitalPolicyProcedures = () => {
  const [policies, setPolicies] = useState([
    { name: 'Infection Control', updated: 'Jan 2024', status: 'Active' },
    { name: 'HIPAA Compliance', updated: 'Feb 2024', status: 'Active' },
    { name: 'Data Privacy', updated: 'Mar 2024', status: 'Under Review' },
  ]);

  return (
    <div>
      <h2>Digital Policy & Procedures</h2>
      <p>Access and manage hospital policies and procedures in a centralized digital platform.</p>
      <ul>
        {policies.map((policy, index) => (
          <li key={index}>
            <strong>{policy.name}</strong> - Last Updated: {policy.updated} - Status: {policy.status}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Initiate Policy Review')}>
        Initiate Policy Review
      </button>
    </div>
  );
};

export default DigitalPolicyProcedures;
