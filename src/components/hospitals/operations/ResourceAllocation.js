import React, { useState, useEffect } from 'react';
import './ResourceAllocation.css'; // For custom styles

const ResourceAllocation = () => {
  const [resources, setResources] = useState({
    ventilators: 10,
    beds: 50,
    PPE: 100,
    oxygenTanks: 30,
    syringes: 500,
    staff: {
      doctors: 20,
      nurses: 40,
    }
  });

  const [lowResources, setLowResources] = useState([]);

  useEffect(() => {
    // Check for resources below a critical threshold
    const criticalResources = Object.entries(resources)
      .filter(([resource, quantity]) => quantity < 5 && typeof quantity === 'number')
      .map(([resource]) => resource);

    setLowResources(criticalResources);
  }, [resources]);

  const allocateResource = (resource, amount) => {
    if (resources[resource] >= amount) {
      setResources((prev) => ({
        ...prev,
        [resource]: prev[resource] - amount,
      }));
    }
  };

  const allocateStaff = (staffType, amount) => {
    setResources((prev) => ({
      ...prev,
      staff: {
        ...prev.staff,
        [staffType]: prev.staff[staffType] - amount,
      },
    }));
  };

  return (
    <div>
      <h2>Resource Allocation</h2>
      <p>Manage and allocate critical hospital resources, including staff.</p>

      {lowResources.length > 0 && (
        <div className="alert">
          <strong>Warning:</strong> The following resources are critically low: {lowResources.join(', ')}
        </div>
      )}

      <h3>Medical Resources</h3>
      <ul>
        {Object.entries(resources).map(([resource, quantity]) => (
          typeof quantity === 'number' && (
            <li key={resource}>
              {resource}: {quantity} units available{' '}
              <button onClick={() => allocateResource(resource, 1)} disabled={quantity <= 0}>Allocate 1</button>
            </li>
          )
        ))}
      </ul>

      <h3>Staff Resources</h3>
      <ul>
        {Object.entries(resources.staff).map(([staffType, quantity]) => (
          <li key={staffType}>
            {staffType}: {quantity} available{' '}
            <button onClick={() => allocateStaff(staffType, 1)} disabled={quantity <= 0}>Allocate 1</button>
          </li>
        ))}
      </ul>

      <h4>Resource Forecasting (future feature)</h4>
      <p>Using real-time data, we will forecast future resource needs to optimize allocation.</p>
    </div>
  );
};

export default ResourceAllocation;
