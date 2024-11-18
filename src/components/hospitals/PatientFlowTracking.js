import React, { useState, useEffect } from 'react';

// Sample patient data
const initialPatients = [
  { name: 'John Doe', status: 'Admitted', location: 'ICU', timestamp: '2024-10-15 09:00' },
  { name: 'Jane Smith', status: 'In Surgery', location: 'Operating Room', timestamp: '2024-10-15 10:30' },
];

const PatientFlowTracking = () => {
  const [patients, setPatients] = useState(initialPatients); // State to manage patient data
  const [averageStay, setAverageStay] = useState(3); // Example: Avg. stay in days (static value for demo)
  const [dischargeRate, setDischargeRate] = useState(85); // Example: Discharge rate %

  // Simulate real-time patient updates (e.g., new data or status change)
  useEffect(() => {
    const interval = setInterval(() => {
      const newPatient = {
        name: 'Alex Johnson',
        status: 'Waiting for Transfer',
        location: 'ER',
        timestamp: new Date().toLocaleString(),
      };
      setPatients((prev) => [...prev, newPatient]); // Add a new patient to the list
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Patient Flow Tracking</h2>
      <p>Monitor patient movements, statuses, and hospital performance in real time.</p>

      {/* Real-Time Patient Monitoring */}
      <section style={styles.section}>
        <h3>Real-Time Patient Monitoring</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Location</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={`${patient.name}-${index}`}>
                <td>{patient.name}</td>
                <td>{patient.status}</td>
                <td>{patient.location}</td>
                <td>{patient.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Visual Dashboard & Analytics */}
      <section style={styles.section}>
        <h3>Visual Dashboard & Analytics</h3>
        <p>Track key performance indicators (KPIs) and hospital metrics:</p>
        <ul>
          <li>Discharge Rate: {dischargeRate}%</li>
          <li>Average Patient Stay: {averageStay} days</li>
          <li>Busiest Department: Emergency Room</li>
        </ul>
        <p>Visualize trends and identify bottlenecks:</p>
        <img src="https://via.placeholder.com/500x300" alt="Heatmap" style={styles.image} />
      </section>

      {/* Patient Timeline and History */}
      <section style={styles.section}>
        <h3>Patient Timeline and History</h3>
        <p>View the complete journey of a patient from admission to discharge:</p>
        {patients.map((patient) => (
          <div key={patient.name} style={styles.timelineEntry}>
            <strong>{patient.name}</strong>: {patient.status} at {patient.location} 
            <span style={styles.timestamp}> (Last updated: {patient.timestamp})</span>
          </div>
        ))}
      </section>

      {/* Forecasting and Predictive Analytics */}
      <section style={styles.section}>
        <h3>Forecasting and Predictive Analytics</h3>
        <ul>
          <li>Predict Patient Surges: Expect increased admissions in flu season.</li>
          <li>Average Length of Stay (LOS) Prediction: 4.2 days for respiratory cases.</li>
          <li>AI Recommendation: Discharge planning for John Doe at 4 PM.</li>
        </ul>
      </section>

      {/* Custom Reports and Insights */}
      <section style={styles.section}>
        <h3>Custom Reports and Insights</h3>
        <button style={styles.button} onClick={() => generateReport()}>Generate Report</button>
        <p>Export reports for audits, compliance, or insurance claims.</p>
      </section>
    </div>
  );
};

// Simulate report generation
const generateReport = () => {
  alert('Custom report generated!');
};

// Basic styling
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#dfe4e5',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#002432',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '10px',
  },
  th: {
    backgroundColor: '#002432',
    color: '#fff',
    padding: '10px',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
  },
  timelineEntry: {
    marginBottom: '5px',
  },
  timestamp: {
    color: '#888',
    fontSize: '0.9em',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#27c7b8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PatientFlowTracking;
