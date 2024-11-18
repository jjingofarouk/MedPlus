import React from 'react';
import './avatar.css';

const Avatar = ({ src, alt, size = '50px' }) => {
  return (
    <div className="avatar-container" style={{ width: size, height: size }}>
      <img src={src} alt={alt} className="avatar-image" />
    </div>
  );
};

const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="avatar-image" />
);

const AvatarFallback = ({ size = '50px' }) => (
  <div className="avatar-fallback" style={{ width: size, height: size }}>
    {/* Default fallback content */}
  </div>
);

export { Avatar, AvatarImage, AvatarFallback };
