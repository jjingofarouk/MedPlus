import React, { useState } from 'react';
import { casesData } from './cases';
import './CaseStudies.css'; // Import CSS file for styles

const CaseStudies = () => {
  const [newCaseDescription, setNewCaseDescription] = useState('');
  const [newCaseImageUrl, setNewCaseImageUrl] = useState('');
  const [cases, setCases] = useState(casesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 5;
  const [selectedCase, setSelectedCase] = useState(null); // Track selected case

  const handleUploadCase = (e) => {
    e.preventDefault();
    if (newCaseDescription && newCaseImageUrl) {
      const newCase = {
        description: newCaseDescription,
        image_url: newCaseImageUrl,
      };
      setCases([...cases, newCase]);
      setNewCaseDescription('');
      setNewCaseImageUrl('');
    }
  };

  const filteredCases = cases.filter((caseItem) =>
    caseItem.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);
  const totalPages = Math.ceil(filteredCases.length / casesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="case-studies-container">
      <h1 className="title">Medical Cases</h1>



      <div className="search-container">
        <input
          type="text"
          placeholder="Search cases..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="case-list">
        {currentCases.length > 0 ? (
          currentCases.map((caseItem, index) => (
            <div key={index} className="case-card" onClick={() => setSelectedCase(caseItem)}>
              <p className="case-description">{caseItem.description}</p>
              {caseItem.image_url && (
                <img
                  src={caseItem.image_url}
                  alt={`Case ${index + 1}`}
                  className="case-image"
                />
              )}
            </div>
          ))
        ) : (
          <p>No cases found.</p>
        )}
      </div>


      {filteredCases.length > casesPerPage && (
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
            Next
          </button>
        </div>
      )}

<form onSubmit={handleUploadCase} className="case-form">
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={newCaseDescription}
            onChange={(e) => setNewCaseDescription(e.target.value)}
            required
            className="textarea"
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={newCaseImageUrl}
            onChange={(e) => setNewCaseImageUrl(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="upload-button">Upload Case</button>
      </form>

      {/* Modal for displaying case details */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Case Details</h4>
            <p>{selectedCase.description}</p>
            {selectedCase.image_url && (
              <img src={selectedCase.image_url} alt="Selected case" className="modal-case-image" />
            )}
            <button className="close-button" onClick={() => setSelectedCase(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
