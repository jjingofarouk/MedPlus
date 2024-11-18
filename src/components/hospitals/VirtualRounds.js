import React, { useState, useEffect } from 'react';
import './VirtualRounds.css'; // For styling
import patientsData from './patients.json';

const VirtualRounds = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newNote, setNewNote] = useState('');
  const [vitals, setVitals] = useState({ temp: '', bp: '' });
  const [task, setTask] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Load patient data
  useEffect(() => {
    setPatients(patientsData);
  }, []);

  // Update Vitals
  const handleVitalsUpdate = (id) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id ? { ...patient, vitals } : patient
      )
    );
    setVitals({ temp: '', bp: '' });
    alert('Vitals updated!');
  };

  // Add Note
  const handleNoteAddition = (id) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id
          ? { ...patient, notes: `${patient.notes}\n${newNote}` }
          : patient
      )
    );
    setNewNote('');
  };

  // Assign Task
  const handleTaskAssignment = (id) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id
          ? { ...patient, task: task }
          : patient
      )
    );
    setTask('');
    alert('Task assigned!');
  };

  // Add Chat Message
  const handleChatSend = () => {
    setChatMessages([...chatMessages, { sender: 'You', message }]);
    setMessage('');
  };

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="virtual-rounds">
      <div className="patient-roster">
        <h2>Patient Roster</h2>
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="patient-card"
            onClick={() => selectPatient(patient)}
          >
            <h3>{patient.name}</h3>
            <p>Room: {patient.room}</p>
            <p>Status: {patient.status}</p>
            <p>Attending: {patient.doctor}</p>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <div className="patient-details">
          <h2>Details for {selectedPatient.name}</h2>
          <p><strong>Doctor:</strong> {selectedPatient.doctor}</p>
          <p><strong>Nurse:</strong> {selectedPatient.nurse}</p>
          <p><strong>Vitals:</strong> Temp - {selectedPatient.vitals.temp}, BP - {selectedPatient.vitals.bp}</p>
          <p><strong>Notes:</strong> {selectedPatient.notes}</p>

          <h3>Update Vitals</h3>

<input
  type="text"
  placeholder="Temperature (°C)"
  value={vitals.temp}
  onChange={(e) => setVitals({ ...vitals, temp: e.target.value })}
/>

<input
  type="text"
  placeholder="Blood Pressure (mmHg)"
  value={vitals.bp}
  onChange={(e) => setVitals({ ...vitals, bp: e.target.value })}
/>

<input
  type="text"
  placeholder="Pulse Rate (bpm)"
  value={vitals.hr}
  onChange={(e) => setVitals({ ...vitals, hr: e.target.value })}
/>

<input
  type="text"
  placeholder="Respiratory Rate (breaths/min)"
  value={vitals.rr}
  onChange={(e) => setVitals({ ...vitals, rr: e.target.value })}
/>

<input
  type="text"
  placeholder="Oxygen Saturation (%)"
  value={vitals.spo2}
  onChange={(e) => setVitals({ ...vitals, spo2: e.target.value })}
/>

<input
  type="text"
  placeholder="Glucose Level (mg/dL)"
  value={vitals.glucose}
  onChange={(e) => setVitals({ ...vitals, glucose: e.target.value })}
/>

<input
  type="text"
  placeholder="Pain Score (1-10)"
  value={vitals.pain}
  onChange={(e) => setVitals({ ...vitals, pain: e.target.value })}
/>

          <button onClick={() => handleVitalsUpdate(selectedPatient.id)}>Update Vitals</button>

          <h3>Add Clinical Notes</h3>
          <textarea
            placeholder="Enter new note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button onClick={() => handleNoteAddition(selectedPatient.id)}>Add Note</button>

          <h3>Assign Task</h3>
          <input
            type="text"
            placeholder="Assign a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={() => handleTaskAssignment(selectedPatient.id)}>Assign Task</button>

          <h3>Patient Status</h3>
          <select
            value={selectedPatient.status}
            onChange={(e) =>
              setPatients((prev) =>
                prev.map((p) =>
                  p.id === selectedPatient.id
                    ? { ...p, status: e.target.value }
                    : p
                )
              )
            }
          >
            <option value="Stable">Stable</option>
            <option value="Critical">Critical</option>
            <option value="Recovering">Recovering</option>
          </select>

          <h3>Resource Tracking</h3>
          <p>Oxygen: {selectedPatient.resources.oxygen}</p>
          <p>IV Drip: {selectedPatient.resources.iv}</p>

          <h3>Chat</h3>
          <div className="chat-box">
            {chatMessages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.sender}:</strong> {msg.message}
              </p>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleChatSend}>Send</button>
        </div>
      )}
    </div>
  );
};

export default VirtualRounds;
