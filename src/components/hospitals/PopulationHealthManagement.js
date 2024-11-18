import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const PopulationHealthManagement = () => {
  const [healthData, setHealthData] = useState([
    { condition: 'Diabetes', percentage: 15.4, risk: 0.1 },
    { condition: 'Heart Disease', percentage: 9.1, risk: 0.2 },
    { condition: 'Hypertension', percentage: 22.8, risk: 0.15 },
  ]);
  const [riskData, setRiskData] = useState([]);
  const [engagement, setEngagement] = useState(0);
  const [alerts, setAlerts] = useState([]);
  const [sdoh, setSdoh] = useState({ income: 30000, education: 'High School' });

  useEffect(() => {
    // Simulate real-time updates for health data
    const interval = setInterval(() => {
      const newRiskData = healthData.map((data) => ({
        ...data,
        risk: data.risk + (Math.random() - 0.05), // Random fluctuation
      }));

      setHealthData((prevData) =>
        prevData.map((data) => ({
          ...data,
          percentage: Math.max(0, data.percentage + (Math.random() - 0.5)),
        }))
      );

      setRiskData((prev) => [...prev, ...newRiskData]);

      // Trigger alerts based on health thresholds
      const newAlerts = newRiskData.filter((data) => data.risk > 0.15);
      if (newAlerts.length > 0) {
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          `High risk detected for: ${newAlerts.map(item => item.condition).join(', ')}`,
        ]);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [healthData]);

  const handleGenerateReport = () => {
    const report = {
      healthData,
      riskData,
      engagement,
      sdoh,
      alerts,
    };
    console.log('Generating Population Health Report:', JSON.stringify(report, null, 2));
    alert('Population Health Report generated in console.');
  };

  const handlePatientEngagement = () => {
    // Simulate patient engagement score
    const newEngagement = Math.random() * 100;
    setEngagement(newEngagement);
  };

  return (
    <div className="population-health-management">
      <h2>Population Health Management</h2>
      <p>Monitor and manage health outcomes across specific population segments.</p>

      {/* Health Data List */}
      <ul>
        {healthData.map((data, index) => (
          <li key={index}>
            {data.condition}: {data.percentage.toFixed(2)}% | Risk: {data.risk.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Alerts Section */}
      <h3>Alerts</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} style={{ color: 'red' }}>
            {alert}
          </li>
        ))}
      </ul>

      {/* Risk Data Visualization */}
      <h3>Risk Trend Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={riskData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="condition" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="risk" stroke="#f78837" name="Risk Level" />
        </LineChart>
      </ResponsiveContainer>

      {/* Patient Engagement Button */}
      <button onClick={handlePatientEngagement}>
        Assess Patient Engagement
      </button>
      <p>Current Patient Engagement Level: {engagement.toFixed(2)}%</p>

      {/* Generate Report Button */}
      <button onClick={handleGenerateReport}>
        Generate Population Health Report
      </button>

      {/* SDOH Assessment */}
      <h3>Social Determinants of Health</h3>
      <p>Income: ${sdoh.income}, Education: {sdoh.education}</p>
    </div>
  );
};

export default PopulationHealthManagement;
