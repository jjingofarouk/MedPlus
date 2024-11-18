import React, { useState, useEffect } from 'react';

const OperationalInsights = () => {
  const [insights, setInsights] = useState({
    bedOccupancy: 75,
    staffUtilization: 82,
    resourceWaste: 4.5, // percentage
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInsights({
        bedOccupancy: Math.round(Math.random() * 100),
        staffUtilization: Math.round(Math.random() * 100),
        resourceWaste: Math.random() * 10,
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Operational Insights</h2>
      <p>Gain real-time insights into hospital operations.</p>
      <ul>
        <li>Bed Occupancy: {insights.bedOccupancy}%</li>
        <li>Staff Utilization: {insights.staffUtilization}%</li>
        <li>Resource Waste: {insights.resourceWaste.toFixed(2)}%</li>
      </ul>
      <button onClick={() => alert('Optimize Staff Scheduling')}>
        Optimize Staff Scheduling
      </button>
    </div>
  );
};

export default OperationalInsights;
