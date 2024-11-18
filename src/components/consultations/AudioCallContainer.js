import React from 'react';
import { Link } from 'react-router-dom';

const AudioCallContainer = ({ doctor, patient, consultationId }) => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div className="call-container" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ color: '#2e5668' }}>Start Audio Call</h1>
        <div className="call-info" style={{ marginBottom: '20px' }}>
          <p><strong>Doctor:</strong> {doctor}</p>
          <p><strong>Patient:</strong> {patient}</p>
          <p><strong>Appointment ID:</strong> {consultationId}</p>
        </div>
        <Link to="#" className="button" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff867c', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>Start Call</Link>
        <Link to="/" className="button" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff867c', color: '#fff', textDecoration: 'none', borderRadius: '4px', marginTop: '10px' }}>Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default AudioCallContainer;
