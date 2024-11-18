import React from 'react';
import './Badge.css'; // You can create a CSS file for custom styles if needed

const Badge = ({ text, type = 'default' }) => {
  return (
    <span className={`badge badge-${type}`}>
      {text}
    </span>
  );
};

export default Badge;
