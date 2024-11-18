import React, { useState, useEffect } from 'react';
import './EmergencySimulator.css'; // For custom styles

const EmergencyPreparedness = () => {
  const [drill, setDrill] = useState(false);
  const [scenario, setScenario] = useState('fire'); // Default scenario
  const [responseData, setResponseData] = useState(null); // Drill data
  const [drillTime, setDrillTime] = useState(5); // Duration in seconds
  const [preparednessScore, setPreparednessScore] = useState(80); // Default score
  const [feedback, setFeedback] = useState([]); // User feedback array

  const startDrill = () => {
    setDrill(true);
    setResponseData(null); // Reset previous drill data
    setFeedback([]); // Reset feedback data

    // Simulate drill data after completion
    setTimeout(() => {
      const successRate = Math.floor(Math.random() * 100);
      const bottlenecks = Math.floor(Math.random() * 5);
      const improvements = generateImprovements(bottlenecks); // Generate recommendations based on bottlenecks

      setResponseData({
        successRate,
        bottlenecks,
        improvements,
      });
      setDrill(false);
    }, drillTime * 1000);
  };

  // Function to generate improvement suggestions based on bottlenecks
  const generateImprovements = (bottlenecks) => {
    const suggestions = [
      'Improve communication protocols',
      'Increase medical supplies',
      'Enhance training for staff',
      'Upgrade technology and equipment',
      'Conduct regular drills and evaluations',
    ];

    // Return random suggestions based on the number of bottlenecks
    return Array.from({ length: bottlenecks }, () => {
      return suggestions[Math.floor(Math.random() * suggestions.length)];
    });
  };

  useEffect(() => {
    // Updating preparedness score based on drill outcomes
    if (responseData) {
      const newScore = Math.max(0, preparednessScore - responseData.bottlenecks * 5 + responseData.successRate / 10);
      setPreparednessScore(newScore);
      collectFeedback(); // Collect user feedback after drill
    }
  }, [responseData]);

  // Function to collect user feedback based on the scenario
  const collectFeedback = () => {
    const userFeedback = prompt('Please provide your feedback on the drill (e.g., improvements needed, thoughts):');
    if (userFeedback) {
      setFeedback(prev => [...prev, userFeedback]);
    }
  };

  return (
    <div>
      <h2>Emergency Simulator</h2>
      <p>Simulate and prepare for hospital emergency scenarios.</p>

      <label>
        Select Scenario:
        <select value={scenario} onChange={(e) => setScenario(e.target.value)}>
          <option value="fire">Fire</option>
          <option value="earthquake">Earthquake</option>
          <option value="mass-casualty">Mass Casualty</option>
        </select>
      </label>

      <label>
        Drill Duration (seconds):
        <input type="number" value={drillTime} min="1" onChange={(e) => setDrillTime(e.target.value)} />
      </label>

      <button onClick={startDrill} disabled={drill}>Run Emergency Drill</button>

      {drill && <p>Emergency drill in progress...</p>}

      {responseData && (
        <div className="drill-results">
          <h3>Drill Results</h3>
          <p>Success Rate: {responseData.successRate}%</p>
          <p>Bottlenecks: {responseData.bottlenecks}</p>
          <p>Recommended Improvements:</p>
          <ul>
            {responseData.improvements.map((improvement, idx) => (
              <li key={idx}>{improvement}</li>
            ))}
          </ul>
        </div>
      )}

      <h4>Current Preparedness Score: {preparednessScore}</h4>

      {/* Display user feedback */}
      {feedback.length > 0 && (
        <div className="feedback">
          <h4>User Feedback</h4>
          <ul>
            {feedback.map((fb, idx) => (
              <li key={idx}>{fb}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmergencyPreparedness;
