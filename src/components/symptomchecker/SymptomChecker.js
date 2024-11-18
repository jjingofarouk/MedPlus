// SymptomCheckerPage.js
import React from 'react';
import './SymptomChecker.css'; // Create a CSS file for styling
import Sidebar from './Sidebar'; // Import Sidebar component
import Symptom from './Symptom'; // Import SymptomChecker component

const SymptomChecker = () => {
  return (
    <div className="symptom-checker-page">      
      <div className="content">
        <h1>Symptom Checker</h1>
        <p>Enter your symptoms below to find possible conditions and guidance.</p>
        <Symptom /> {/* Symptom Checker displayed here */}
      </div>

    </div>
  );
};

export default SymptomChecker;
