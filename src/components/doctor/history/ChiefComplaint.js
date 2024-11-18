import React, { useState, useEffect } from 'react';
import { symptomsList } from './symptomsList';

const ChiefComplaint = ({ chiefComplaints = ['', '', ''], durations = ['', '', ''], handleInputChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValues, setInputValues] = useState(chiefComplaints);
  const [durationValues, setDurationValues] = useState(durations);
  const [durationUnits, setDurationUnits] = useState(['days', 'days', 'days']); // Default to 'days' for all

  useEffect(() => {
    setInputValues(chiefComplaints);
    setDurationValues(durations);
  }, [chiefComplaints, durations]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    const updatedComplaints = [...inputValues];
    updatedComplaints[index] = value;
    setInputValues(updatedComplaints);

    // Update the parent component
    handleInputChange(`chiefComplaints[${index}]`, '', value);

    // Simple filter based on input, show suggestions after typing 1 character
    if (value.length > 0) {
      const filteredSuggestions = symptomsList
        .filter(symptom => symptom.toLowerCase().startsWith(value.toLowerCase()))
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]); // Clear suggestions if input is cleared
    }
  };

  const handleSuggestionClick = (suggestion, index) => {
    const updatedComplaints = [...inputValues];
    updatedComplaints[index] = suggestion; // Replace the input with the selected suggestion
    setInputValues(updatedComplaints);
    handleInputChange(`chiefComplaints[${index}]`, '', suggestion); // Update parent component
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleDurationChange = (index, e) => {
    const value = e.target.value;
    const updatedDurations = [...durationValues];
    updatedDurations[index] = value;
    setDurationValues(updatedDurations);
    handleInputChange(`durations[${index}]`, '', value); // Update duration in the parent component
  };

  const handleUnitChange = (index, e) => {
    const value = e.target.value;
    const updatedUnits = [...durationUnits];
    updatedUnits[index] = value;
    setDurationUnits(updatedUnits);
    handleInputChange(`durationUnits[${index}]`, '', value); // Update unit in the parent component
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Chief Complaints</h2>
      </div>
      <div className="card-content">
        {[0, 1, 2].map(index => (
          <div key={index} className="complaint-section">
            <label htmlFor={`chiefComplaint${index}`}>Complaint {index + 1}:</label>
            <textarea
              id={`chiefComplaint${index}`}
              placeholder="Enter the complaint"
              value={inputValues[index] || ''}
              onChange={(e) => handleChange(index, e)}
              className="text-area"
            />
            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((suggestion, suggestionIndex) => (
                  <div
                    key={suggestionIndex}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion, index)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
            <label htmlFor={`duration${index}`}>Duration of Symptoms:</label>
            <div className="duration-input">
              <input
                type="text"
                id={`duration${index}`}
                placeholder="e.g., 3"
                value={durationValues[index] || ''}
                onChange={(e) => handleDurationChange(index, e)}
                className="input"
              />
              <select
                value={durationUnits[index]}
                onChange={(e) => handleUnitChange(index, e)}
                className="duration-unit"
              >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChiefComplaint;
