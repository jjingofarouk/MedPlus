import React from 'react';
import './avatar.css'; // You can create a CSS file for custom styles if needed

const Avatar = ({ src, alt, size = '50px' }) => {
  return (
    <div className="avatar-container" style={{ width: size, height: size }}>
      <img src={src} alt={alt} className="avatar-image" />
    </div>
  );
};

export default Avatar;
