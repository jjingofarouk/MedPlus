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
import './PredictiveAnalytics.css'; // Optional CSS

const PredictiveAnalytics = () => {
  const [predictions, setPredictions] = useState({
    patientOutcomes: 85,
    readmissionRisk: 12,
    resourceShortages: { beds: 5, ventilators: 2 },
  });

  const [predictionHistory, setPredictionHistory] = useState([]); // Store prediction history
  const [alert, setAlert] = useState(''); // Store alerts

  // Simulate real-time updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrediction = {
        timestamp: new Date().toLocaleTimeString(),
        patientOutcomes: Math.random() * 100,
        readmissionRisk: Math.random() * 20,
        resourceShortages: {
          beds: Math.round(Math.random() * 10),
          ventilators: Math.round(Math.random() * 5),
        },
      };

      // Update predictions and history
      setPredictions(newPrediction);
      setPredictionHistory((prev) => [...prev, newPrediction]);

      // Trigger alert if thresholds are exceeded
      if (newPrediction.readmissionRisk > 15) {
        setAlert('⚠️ High Readmission Risk Detected!');
      } else {
        setAlert('');
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Export prediction history as JSON file
  const handleExport = () => {
    const dataStr = JSON.stringify(predictionHistory, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'predictive_analytics_report.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="predictive-analytics">
      <h2>Predictive Analytics Dashboard</h2>
      <p>Leverage AI to predict patient outcomes, risks, and resource requirements in real-time.</p>

      {/* Display current predictions */}
      <ul>
        <li>Patient Outcomes: {predictions.patientOutcomes.toFixed(2)}%</li>
        <li>Readmission Risk: {predictions.readmissionRisk.toFixed(2)}%</li>
        <li>
          Resource Shortages: Beds - {predictions.resourceShortages.beds}, Ventilators -{' '}
          {predictions.resourceShortages.ventilators}
        </li>
      </ul>

      {/* Alert Section */}
      {alert && <div className="alert">{alert}</div>}

      {/* Chart Visualization */}
      <h3>Prediction Trends (Last 5 Entries)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={predictionHistory.slice(-5)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="patientOutcomes" stroke="#27c7b8" name="Outcomes (%)" />
          <Line type="monotone" dataKey="readmissionRisk" stroke="#f78837" name="Readmission Risk (%)" />
        </LineChart>
      </ResponsiveContainer>

      {/* Scenario Planning */}
      <h3>Scenario Planning</h3>
      <label>Additional ICU Beds: </label>
      <input
        type="number"
        placeholder="Enter number of beds"
        onChange={(e) => handleScenarioChange(e.target.value)}
      />

      {/* Export Button */}
      <button onClick={handleExport}>Export Report</button>
    </div>
  );
};

// Scenario planning logic (Placeholder)
const handleScenarioChange = (beds) => {
  alert(`Impact: Adding ${beds} ICU beds will reduce readmission risk by ${(beds * 0.5).toFixed(2)}%.`);
};

export default PredictiveAnalytics;
