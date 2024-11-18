import React, { useState, useMemo, useCallback } from 'react';
import './PharmaciesSection.css';
import Map from 'H:/Med/emr-develop/frontend/src/components/ui/Map';
import PharmacyDetails from './PharmacyDetails';
import pharmaciesData from './pharmacies_data.json';

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const PharmaciesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMap, setShowMap] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(pharmaciesData.length / ITEMS_PER_PAGE);

  const sortedPharmacies = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    let filteredData = pharmaciesData.filter(pharmacy =>
      pharmacy.name.toLowerCase().includes(lowercasedTerm) ||
      pharmacy.address.toLowerCase().includes(lowercasedTerm) ||
      pharmacy.description.toLowerCase().includes(lowercasedTerm)
    );

    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        const aValue = a[sortConfig.key].toLowerCase();
        const bValue = b[sortConfig.key].toLowerCase();
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredData;
  }, [searchTerm, sortConfig]);

  const requestSort = useCallback((key) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.key === key) {
        return { ...prevConfig, direction: prevConfig.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  }, []);

  const debouncedSetSearchTerm = useMemo(
    () => debounce(setSearchTerm, 300),
    []
  );

  const handleSearchChange = (event) => {
    debouncedSetSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePharmacyClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  };

  const handleToggleMap = () => {
    setShowMap(prevState => !prevState);
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.filter(String).map((part, i) => (
          regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        ))}
      </span>
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPharmacies = sortedPharmacies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="pharmacies-section">
      <h2>Find Pharmacies</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, address, or description..."
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      <div className="sort-container">
        <button onClick={() => requestSort('name')} className={`sort-button ${sortConfig.key === 'name' ? sortConfig.direction : ''}`}>
          Sort by Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
        </button>
        <button onClick={() => requestSort('address')} className={`sort-button ${sortConfig.key === 'address' ? sortConfig.direction : ''}`}>
          Sort by Address {sortConfig.key === 'address' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
        </button>
        {/* Add more sort buttons as needed */}
      </div>
      <div className="pharmacy-list">
        {currentPharmacies.length === 0 ? (
          <p className="no-results">No pharmacies found. Try a different search term.</p>
        ) : (
          <ul>
            {currentPharmacies.map(pharmacy => (
              <li key={pharmacy.link} onClick={() => handlePharmacyClick(pharmacy)} className="pharmacy-item">
                <h3>{highlightText(pharmacy.name, searchTerm)}</h3>
                <p><strong>Address:</strong> {highlightText(pharmacy.address, searchTerm)}</p>
                <p><strong>About:</strong> {highlightText(pharmacy.description, searchTerm)}</p>
                <p><strong>Phone:</strong> {pharmacy.phone || 'Not available'}</p>
                {pharmacy.image_url && <img src={pharmacy.image_url} alt={pharmacy.name} className="pharmacy-image" />}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedPharmacy && (
        <PharmacyDetails pharmacy={selectedPharmacy} onClose={() => setSelectedPharmacy(null)} />
      )}
      <button className="toggle-map-button" onClick={handleToggleMap}>
        {showMap ? 'Hide Map' : 'Show Map'}
      </button>
      {showMap && (
        <Map locations={currentPharmacies.map(pharmacy => ({ lat: pharmacy.lat, lng: pharmacy.lng }))} />
      )}
      <div className="pagination">
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>‹</button>
        {[...Array(totalPages).keys()].slice(0, 5).map(page => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={currentPage === page + 1 ? 'active' : ''}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>›</button>
        <button onClick={handleLastPage} disabled={currentPage === totalPages}>Last</button>
      </div>
    </section>
  );
};

export default PharmaciesSection;
