import React, { useState } from 'react';
import './PublicHospitalsSection.css';
import HospitalDetails from './HospitalDetails'; // Import the HospitalDetails component
import hospitalData from './hospitals.json'; // Import the hospital data

const PublicHospitalsSection = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage] = useState(5); // Number of hospitals per page
  const [selectedHospital, setSelectedHospital] = useState(null); // State to manage selected hospital
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [viewMode, setViewMode] = useState('grid'); // State for view mode

  const handleViewDetails = (hospital) => {
    setSelectedHospital(hospital); // Set the selected hospital for details
  };

  const handleCloseDetails = () => {
    setSelectedHospital(null); // Close the details view
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query
    setCurrentPage(1); // Reset to first page on search
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode); // Update view mode
  };

  const filteredHospitals = hospitalData.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredHospitals.length / itemsPerPage);

  const currentHospitals = filteredHospitals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Change to the selected page
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1); // Go to the next page
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1); // Go to the previous page
    }
  };

  return (
    <section className="hospitals-section">
      <h2>Find Hospitals</h2>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="view-mode-buttons">
          <button
            className={`view-mode-button ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => handleViewModeChange('list')}
          >
            List View
          </button>
          <button
            className={`view-mode-button ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => handleViewModeChange('grid')}
          >
            Grid View
          </button>
        </div>
      </div>
      
      <div className={`hospitals-list ${viewMode}`}>
        {currentHospitals.map((hospital, index) => (
          <div key={index} className="hospital-card">
            <img 
              src={hospital.photo} 
              alt={hospital.name} 
              className="hospital-photo"
            />
            <h3 className="hospital-name">{hospital.name}</h3>
            <p className="hospital-address">{hospital.address}</p>


            <p className="hospital-description">
              <strong>About:</strong> {hospital.description}
            </p>
            <p className="hospital-phone">
              <strong>Phone:</strong> {hospital.phone}
            </p>
            <a 
              href={`https://www.ughealthdirectory.com${hospital.profile_url}`} 
              className="hospital-profile-url"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Profile
            </a>
            <button 
              className="details-button"
              onClick={() => handleViewDetails(hospital)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          &laquo; Prev
        </button>
        {[...Array(totalPages).keys()].slice(0, 5).map(number => (
          <button 
            key={number + 1}
            onClick={() => handlePageChange(number + 1)}
            className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
          >
            {number + 1}
          </button>
        ))}
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next &raquo;
        </button>
      </div>

      {/* Render the HospitalDetails component if a hospital is selected */}
      {selectedHospital && (
        <HospitalDetails 
          hospital={selectedHospital} 
          onClose={handleCloseDetails} 
        />
      )}
    </section>
  );
};

export default PublicHospitalsSection;
