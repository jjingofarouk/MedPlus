import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faStethoscope, faFileMedical, faUsers, faUser, faSearch, faBell, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const fetchNotifications = () => {
    setNotifications([
      { id: 1, message: 'New appointment request' },
      { id: 2, message: 'New message in the forum' },
    ]);
    setIsNotificationDropdownOpen(true);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <aside className={`sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar-logo">
        <Link to="/" className="logo">MedHub</Link>
      </div>

      <nav className="sidebar-menu">
        <ul className="sidebar-links">
          <li><Link to="/dashboard"><FontAwesomeIcon icon={faCalendarDay} /> Dashboard</Link></li>
          <li><Link to="/appointments"><FontAwesomeIcon icon={faCalendarDay} /> Appointments</Link></li>
          <li><Link to="/consultations"><FontAwesomeIcon icon={faStethoscope} /> Consultations</Link></li>
          <li><Link to="/medical-records"><FontAwesomeIcon icon={faFileMedical} /> Medical Records</Link></li>
          <li><Link to="/users"><FontAwesomeIcon icon={faUsers} /> Users</Link></li>
        </ul>
      </nav>

      <form onSubmit={handleSearch} className="sidebar-search">
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

      <div className="sidebar-notifications" ref={notificationRef}>
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

      <div className="sidebar-profile" ref={profileRef}>
        <button className="profile-toggle" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
        {isDropdownOpen && (
          <ul className="profile-menu" role="menu">
            <li role="none"><Link to="/profile" role="menuitem">View Profile</Link></li>
            <li role="none"><Link to="/settings" role="menuitem">Settings</Link></li>
            <li role="none"><Link to="/logout" role="menuitem">Logout</Link></li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
