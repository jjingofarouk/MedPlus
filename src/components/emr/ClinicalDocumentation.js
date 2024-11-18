import React, { useState } from 'react';
import './ClinicalDocumentation.css';

const ClinicalDocumentation = () => {
  const [note, setNote] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [patientHistory, setPatientHistory] = useState([]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachments([...attachments, ...e.target.files]);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Note saved:', note);
    console.log('Attachments:', attachments);
  };

  return (
    <div className="clinical-documentation">
      <h2>Clinical Documentation</h2>
      
      <div className="section">
        <h3>Enter Clinical Notes</h3>
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Enter clinical notes here..."
          rows="6"
        />
      </div>

      <div className="section">
        <h3>Attachments</h3>
        <input
          type="file"
          multiple
          onChange={handleAttachmentChange}
          className="file-input"
        />
        <div className="attachments-list">
          {attachments.length > 0 && (
            <ul>
              {attachments.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="section">
        <h3>Patient History</h3>
        <button className="fetch-history-btn" onClick={() => {/* Fetch patient history logic */}}>
          Fetch Patient History
        </button>
        <div className="history-list">
          {patientHistory.length > 0 ? (
            <ul>
              {patientHistory.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          ) : (
            <p>No history available</p>
          )}
        </div>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ClinicalDocumentation;
