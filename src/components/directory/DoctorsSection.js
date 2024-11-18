import React, { useState, useEffect } from 'react';
import './DoctorsSection.css';
import doctorsData from './doctors.json';
import { Search, X, Grid, List, ArrowUp, Map, Star, Share2, Heart, Phone } from './lucide-react';

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [sortOption, setSortOption] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setTimeout(() => {
          setDoctors(doctorsData.map(doctor => ({ ...doctor, rating: Math.floor(Math.random() * 5) + 1 })));
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    };
    fetchDoctors();

    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lowercasedSearchTerm = searchTerm.toLowerCase();

  const filteredDoctors = doctors.filter(doctor => {
    return (
      (doctor.name && doctor.name.toLowerCase().includes(lowercasedSearchTerm)) ||
      (doctor.phone && doctor.phone.includes(searchTerm)) ||
      (doctor.email && doctor.email.toLowerCase().includes(lowercasedSearchTerm)) &&
      (selectedSpecialty === 'All' || doctor.specialties === selectedSpecialty)
    );
  });

  const sortedDoctors = filteredDoctors.sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'specialty') {
      return a.specialties.localeCompare(b.specialties);
    } else if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const specialties = [...new Set(doctors.map(doctor => doctor.specialties)), 'All'];

  const indexOfLastDoctor = currentPage * itemsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - itemsPerPage;
  const currentDoctors = sortedDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(sortedDoctors.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(prevPage => prevPage + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(prevPage => prevPage - 1);
  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(totalPages);
  const handleClearSearch = () => setSearchTerm('');
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleFavorite = (doctorId) => {
    setFavorites(prev => 
      prev.includes(doctorId) ? prev.filter(id => id !== doctorId) : [...prev, doctorId]
    );
  };

  const handleShare = (doctor) => {
    // In a real app, this would open a share dialog
    alert(`Sharing ${doctor.name}'s profile`);
  };

  const handleContact = (doctor) => {
    setSelectedDoctor(doctor);
    setShowContactModal(true);
  };

  const ContactModal = ({ doctor, onClose }) => (
    <div className="modal">
      <div className="modal-content">
        <h3>Contact {doctor.name}</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );

  if (loading) return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>Loading doctors...</p>
    </div>
  );
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="doctors-section">
      <h2>Doctors</h2>

      <div className="search-bar">
        <Search className="search-icon" />
        <input 
          type="text" 
          placeholder="Search by name, phone, or email..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          aria-label="Search doctors"
        />
        {searchTerm && (
          <button className="clear-search" onClick={handleClearSearch} aria-label="Clear search">
            <X />
          </button>
        )}
      </div>

      <div className="filters-sort">
        <select 
          value={selectedSpecialty} 
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          aria-label="Filter by specialty"
        >
          {specialties.map(specialty => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>

        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
          aria-label="Sort by"
        >
          <option value="name">Sort by Name</option>
          <option value="specialty">Sort by Specialty</option>
          <option value="rating">Sort by Rating</option>
        </select>

        <select 
          value={itemsPerPage} 
          onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
          aria-label="Items per page"
        >
          {[5, 10, 15, 20].map(size => (
            <option key={size} value={size}>{size} per page</option>
          ))}
        </select>

        <div className="view-mode">
          <button 
            onClick={() => setViewMode('grid')} 
            className={viewMode === 'grid' ? 'active' : ''}
            aria-label="Grid view"
          >
            <Grid />
          </button>
          <button 
            onClick={() => setViewMode('list')} 
            className={viewMode === 'list' ? 'active' : ''}
            aria-label="List view"
          >
            <List />
          </button>
          <button 
            onClick={() => setViewMode('map')} 
            className={viewMode === 'map' ? 'active' : ''}
            aria-label="Map view"
          >
            <Map />
          </button>
        </div>
      </div>

      {viewMode === 'map' ? (
        <div className="map-view">
          <svg viewBox="0 0 100 100" className="simple-map">
            <rect x="0" y="0" width="100" height="100" fill="#dfe4e5" />
            {currentDoctors.map((doctor, index) => (
              <circle 
                key={index} 
                cx={doctor.latitude} 
                cy={doctor.longitude} 
                r="2" 
                fill="#27c7b8" 
                className="doctor-marker" 
              />
            ))}
          </svg>
        </div>
      ) : (
        <div className={`doctors-list ${viewMode}`}>
          {currentDoctors.length > 0 ? (
            currentDoctors.map((doctor, index) => (
              <div key={index} className="doctor-item">
                <h3>{doctor.name}</h3>
                <p><strong>Specialty:</strong> {doctor.specialties || 'N/A'}</p>
                <p><strong>Contact:</strong> {doctor.phone || 'N/A'}</p>
                <p><strong>Email:</strong> {doctor.email || 'N/A'}</p>
                <p><strong>Location:</strong> {doctor.location || 'N/A'}</p>
                <div className="doctor-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < doctor.rating ? "#f78837" : "none"} stroke="#f78837" />
                  ))}
                </div>
                <div className="doctor-actions">
                  <button onClick={() => toggleFavorite(doctor.id)} className={`favorite-btn ${favorites.includes(doctor.id) ? 'active' : ''}`}>
                    <Heart fill={favorites.includes(doctor.id) ? "#f78837" : "none"} />
                  </button>
                  <button onClick={() => handleShare(doctor)} className="share-btn">
                    <Share2 />
                  </button>
                  <button onClick={() => handleContact(doctor)} className="contact-btn">
                    <Phone />
                  </button>
                </div>
                <a href={doctor.profile_url || '#'} target="_blank" rel="noopener noreferrer" className="view-profile">View Profile</a>
              </div>
            ))
          ) : (
            <p className="no-results">No results found.</p>
          )}
        </div>
      )}

      <div className="pagination">
        <button onClick={handleFirstPage} disabled={currentPage === 1} className="pagination-button">
          &laquo;&laquo; First
        </button>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-button">
          &laquo; Prev
        </button>
        {[...Array(totalPages).keys()].slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2)).map(number => (
          <button 
            key={number + 1}
            onClick={() => handlePageChange(number + 1)}
            className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
          >
            {number + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="pagination-button">
          Next &raquo;
        </button>
        <button onClick={handleLastPage} disabled={currentPage === totalPages} className="pagination-button">
          Last &raquo;&raquo;
        </button>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={handleBackToTop} aria-label="Back to top">
          <ArrowUp />
        </button>
      )}

      {showContactModal && selectedDoctor && (
        <ContactModal doctor={selectedDoctor} onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
};

export default DoctorsSection;