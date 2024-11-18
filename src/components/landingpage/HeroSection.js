// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
  return (
    <header className="hero-section">
      <nav className="navbar">
        <Link to="/" className="logo">MedHub</Link>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Go to Dashboard</Link></li>
        </ul>
        <div className="nav-actions">
          <Link to="/signup" className="cta-btn hero-cta">Get Care Now</Link>
        </div>
      </nav>
      <div className="hero-content">
        <h1>Healthier Should Always Be Within Reach</h1>
        <p>For your physical health. For your mental health. For doctors. For hospitals. For all of it in one place. For life.</p>
        <Link to="/signup" className="cta-btn hero-cta">Get Care Now</Link>
      </div>
    </header>
  );
};

export default HeroSection;
