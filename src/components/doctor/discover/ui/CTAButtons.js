// CTAButtons.js
import React from 'react';
import './CTAButtons.css'; // Ensure you have a corresponding CSS file

const CTAButtons = () => (
  <div className="cta-buttons">
    <a href="/login" className="login">Login</a>
    <a href="/signup" className="signup">Sign Up</a>
  </div>
);

export default CTAButtons;
