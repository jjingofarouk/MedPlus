import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDay, faStethoscope, faComments, faBook, faUser, faSearch, faBell, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import axios from 'axios';
import jwt from 'jsonwebtoken'; // Import the jwt library

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [user_type, setuser_type] = useState('');

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notifications', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setNotifications(response.data);
      setIsNotificationDropdownOpen(true);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const fetchuser_type = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwt.decode(token); // Decode the token
          setuser_type(decoded.user_type); // Set user_type from the decoded token
        } catch (error) {
          console.error('Failed to decode token:', error);
        }
      }
    };

    fetchuser_type();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" className="logo">MedHub</Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/appointments"><FontAwesomeIcon icon={faCalendarDay} /> Appointments</Link></li>
          <li><Link to="/consultations"><FontAwesomeIcon icon={faStethoscope} /> Consultations</Link></li>
          <li><Link to="/forum"><FontAwesomeIcon icon={faComments} /> Community</Link></li>
          <li><Link to="/directory"><FontAwesomeIcon icon={faBook} /> Connect</Link></li>
        </ul>
      </nav>

      <form onSubmit={handleSearch} className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search"
        />
        <button type="submit" aria-label="Submit search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div className="navbar-notifications" ref={notificationRef}>
        <button onClick={fetchNotifications} aria-label="Notifications">
          <FontAwesomeIcon icon={faBell} />
          {notifications.length > 0 && <span className="notification-badge">{notifications.length}</span>}
        </button>
        {isNotificationDropdownOpen && notifications.length > 0 && (
          <ul className="notifications-menu">
            {notifications.map((notification) => (
              <li key={notification.id}>{notification.message}</li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label="Toggle dark mode">
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>

      <div className="navbar-profile" ref={profileRef}>
        <button className="profile-toggle" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
        {isDropdownOpen && (
          <ul className="profile-menu" role="menu">
            <li role="none">
              <Link to={user_type === 'doctor' ? '/doctor-profile' : '/patient-profile'} role="menuitem">
                Edit Profile
              </Link>
            </li>
            <li role="none"><Link to="/settings" role="menuitem">Settings</Link></li>
            <li role="none"><button onClick={handleLogout} role="menuitem">Logout</button></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default NavBar;