import React from 'react';
import './PharmacyDetails.css'; // Add appropriate CSS for styling

const PharmacyDetails = ({ pharmacy, onClose }) => {
  return (
    <div className="pharmacy-details">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{pharmacy.name}</h2>
      {pharmacy.image_url && <img src={pharmacy.image_url} alt={pharmacy.name} />}
      <p><strong>Address:</strong> {pharmacy.address}</p>
      <p><strong>Description:</strong> {pharmacy.description}</p>
      <p><strong>Phone:</strong> {pharmacy.phone || 'Not available'}</p>
      {/* Email and Website are not present in the data; you may want to handle or omit these */}
      <p><strong>Email:</strong> {'Not available'}</p>
      <p><strong>Website:</strong> <a href={'wwww.example.com'}>Not available</a></p>
      {/* Rating and Reviews are not present in the data; you may want to handle or omit these */}
      <p><strong>Rating:</strong> {'Not available'}</p>
      <p><strong>Reviews:</strong> {'Not available'}</p>
      <a href={pharmacy.link} target="_blank" rel="noopener noreferrer">View on Website</a>
    </div>
  );
};

export default PharmacyDetails;
