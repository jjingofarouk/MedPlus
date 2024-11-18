import React from 'react';
import './HospitalDetails.css'; // Add appropriate CSS for styling

const HospitalDetails = ({ hospital, onClose }) => {
  return (
    <div className="hospital-details">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{hospital.name}</h2>
      {hospital.photo && <img src={hospital.photo} alt={hospital.name} className="hospital-photo" />}
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Description:</strong> {hospital.description || 'No description available'}</p>
      <p><strong>Phone:</strong> {hospital.phone || 'Not available'}</p>
      <p><strong>Title:</strong> {hospital.title || 'Not available'}</p>
      <p><strong>Specialties:</strong> {hospital.specialties || 'Not available'}</p>
      <a href={`https://www.ughealthdirectory.com${hospital.profile_url}`} target="_blank" rel="noopener noreferrer">View on Website</a>
    </div>
  );
};

export default HospitalDetails;
