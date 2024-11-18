import React from 'react';
import './Card.css'; // Import CSS for card styling

const Card = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <div className={`card-title ${className}`}>
    {children}
  </div>
);

const CardDescription = ({ children, className }) => (
  <div className={`card-description ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className }) => (
  <div className={`card-footer ${className}`}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
