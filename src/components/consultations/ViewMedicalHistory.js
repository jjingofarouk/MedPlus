import React, { useState } from 'react';
import Prescriptions from './Prescriptions'; // New component for prescriptions

function ViewMedicalHistory() {
  const [patientId, setPatientId] = useState('');
  const [patient, setPatient] = useState(null);
  const [history, setHistory] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]); // State for prescriptions
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error handling

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Fetch patient data and medical history based on patientId
    fetch(`/api/patient/${patientId}`)
      .then(response => response.json())
      .then(data => {
        setPatient(data.patient);
        setHistory(data.history);
        setPrescriptions(data.prescriptions); // Assuming prescriptions come from the same API call
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch patient data. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="container">

      <h1>View Medical History</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patient_id">Patient ID:</label>
        <input
          type="text"
          id="patient_id"
          name="patient_id"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />
        <input type="submit" value="View Medical History" />
      </form>

      {loading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}

      {patient && (
        <>
          <Prescriptions prescriptions={prescriptions} /> {/* New prescriptions component */}
        </>
      )}

      <a href="/">Back to Home</a>
    </div>
  );
}

export default ViewMedicalHistory;
