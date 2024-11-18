import React, { useState } from 'react';
import 'H:/Med/medhub/src/components/styles/MobileClinicsSection.css';

const MobileClinicsSection = ({ clinics }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedClinic, setSelectedClinic] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleClinicClick = (clinic) => {
    setSelectedClinic(clinic);
  };

  const filteredClinics = clinics
    .filter(clinic =>
      clinic.name.toLowerCase().includes(searchTerm) || 
      clinic.location.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  return (
    <section className="mobile-clinics-section">
      <h2>Mobile Health Clinics</h2>
      
      {/* Search and Filter */}
      <div className="search-sort-controls">
        <input
          type="text"
          placeholder="Search clinics by name or location..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select value={sortOrder} onChange={handleSortChange} className="sort-select">
          <option value="asc">Sort by Name (A-Z)</option>
          <option value="desc">Sort by Name (Z-A)</option>
        </select>
      </div>
      
      {/* Clinics List */}
      <ul className="clinic-list">
        {filteredClinics.map(clinic => (
          <li key={clinic.id} onClick={() => handleClinicClick(clinic)} className="clinic-card">
            <h3>{clinic.name}</h3>
            <p><strong>Location:</strong> {clinic.location}</p>
            <p><strong>Next Stop:</strong> {clinic.nextStop}</p>
          </li>
        ))}
      </ul>

      {/* Detailed View Modal */}
      {selectedClinic && (
        <div className="clinic-modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedClinic(null)}>&times;</span>
            <h3>{selectedClinic.name}</h3>
            <p><strong>Location:</strong> {selectedClinic.location}</p>
            <p><strong>Next Stop:</strong> {selectedClinic.nextStop}</p>
            <p><strong>Service Type:</strong> {selectedClinic.serviceType}</p>
            <p><strong>Operating Hours:</strong> {selectedClinic.operatingHours}</p>
            <p><strong>Contact:</strong> {selectedClinic.contact}</p>
            <p><strong>Website:</strong> <a href={selectedClinic.website} target="_blank" rel="noopener noreferrer">{selectedClinic.website}</a></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileClinicsSection;
