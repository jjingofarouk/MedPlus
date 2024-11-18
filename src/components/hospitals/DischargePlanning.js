import React, { useState, useEffect } from 'react';

// Sample AI-predicted data
const predictDischargeTime = (patient) => {
  // Example logic: Longer treatment -> Higher discharge delay
  return patient.name === 'Jane Smith' ? 8 : 4; // Simulated prediction in hours
};

const DischargePlanning = () => {
  const [dischargeList, setDischargeList] = useState([
    { name: 'John Doe', ready: true, medicationReady: true, tasksCompleted: true },
    { name: 'Jane Smith', ready: false, medicationReady: false, tasksCompleted: false },
  ]);

  const [alerts, setAlerts] = useState([]);
  const [analytics, setAnalytics] = useState({ avgDischargeTime: 0, readmissionRate: 10 });

  // Dynamic logic to calculate discharge statistics
  const updateAnalytics = () => {
    const totalTime = dischargeList.reduce(
      (acc, patient) => acc + predictDischargeTime(patient), 0
    );
    setAnalytics({
      avgDischargeTime: (totalTime / dischargeList.length).toFixed(2),
      readmissionRate: Math.floor(Math.random() * 15), // Simulated readmission rate
    });
  };

  // Alerts for incomplete tasks or discharge issues
  useEffect(() => {
    const incompletePatients = dischargeList.filter(
      (patient) => !patient.tasksCompleted || !patient.medicationReady
    );
    const newAlerts = incompletePatients.map(
      (patient) => `${patient.name} has pending tasks or medication issues.`
    );
    setAlerts(newAlerts);
    updateAnalytics(); // Recalculate analytics on data change
  }, [dischargeList]);

  const markAsDischarged = (index) => {
    const updatedList = [...dischargeList];
    updatedList.splice(index, 1);
    setDischargeList(updatedList);
  };

  const handleMedicationUpdate = (index) => {
    const updatedList = [...dischargeList];
    updatedList[index].medicationReady = true;
    setDischargeList(updatedList);
  };

  const generateSummary = (patient) => ({
    patientName: patient.name,
    followUp: 'Consultation in 2 weeks',
    medicationStatus: patient.medicationReady ? 'Cleared' : 'Pending',
    tasksStatus: patient.tasksCompleted ? 'All completed' : 'Incomplete',
  });

  return (
    <div style={styles.container}>
      <h2>Discharge Planning & Management</h2>

      {/* Discharge List */}
      <section style={styles.section}>
        <h3>Patients Ready for Discharge</h3>
        <ul>
          {dischargeList.map((patient, idx) => (
            <li key={idx} style={styles.listItem}>
              <strong>{patient.name}</strong> - 
              {patient.ready ? ' Ready for discharge' : ' Not ready'}
              {patient.ready && (
                <>
                  <button style={styles.button} onClick={() => markAsDischarged(idx)}>
                    Discharge
                  </button>
                  <button style={styles.button} onClick={() => handleMedicationUpdate(idx)}>
                    Clear Medication
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Alerts and Communication */}
      <section style={styles.section}>
        <h3>Alerts & Communication</h3>
        {alerts.length > 0 ? (
          alerts.map((alert, idx) => <p key={idx} style={styles.alert}>{alert}</p>)
        ) : (
          <p>No pending alerts.</p>
        )}
      </section>

      {/* Discharge Analytics */}
      <section style={styles.section}>
        <h3>Discharge Analytics</h3>
        <p>Average Discharge Time: {analytics.avgDischargeTime} hours</p>
        <p>Readmission Rate: {analytics.readmissionRate}%</p>
        <div style={styles.chart}>
          <p>Trendline: Discharge Times</p>
          <div style={styles.bar}>
            {dischargeList.map((patient, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.barSegment,
                  height: `${predictDischargeTime(patient) * 10}px`,
                }}
              >
                {predictDischargeTime(patient)} hrs
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Discharge Summary */}
      <section style={styles.section}>
        <h3>Discharge Summaries</h3>
        {dischargeList.map((patient, idx) => {
          const summary = generateSummary(patient);
          return (
            <div key={idx} style={styles.summary}>
              <p><strong>Patient:</strong> {summary.patientName}</p>
              <p><strong>Follow-Up:</strong> {summary.followUp}</p>
              <p><strong>Medication:</strong> {summary.medicationStatus}</p>
              <p><strong>Tasks:</strong> {summary.tasksStatus}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#dfe4e5',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  button: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#27c7b8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  alert: {
    color: 'red',
  },
  chart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '10px',
  },
  bar: {
    display: 'flex',
    gap: '5px',
  },
  barSegment: {
    width: '40px',
    backgroundColor: '#f78837',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '4px',
  },
  summary: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '6px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    marginBottom: '10px',
  },
};

export default DischargePlanning;
