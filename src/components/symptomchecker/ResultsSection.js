// ResultsSection.js
import React from 'react';

function ResultsSection({ results, nextSteps, educationalContent }) {
  return (
    <div className="results-section">
      <h2>Possible Conditions Based on Your Symptoms</h2>
      <ul className="diagnosis-list">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>

      <h3>Next Steps</h3>
      <div className="guidance-content">{nextSteps}</div>

      <h3>Learn More</h3>
      <div className="educational-content">{educationalContent}</div>
    </div>
  );
}

export default ResultsSection;
