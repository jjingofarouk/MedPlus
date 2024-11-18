// src/components/patients/ui/scroll-area.js
import React from 'react';
import './ScrollArea.css'; // Import your styles here

const ScrollArea = ({ children, className }) => {
    return (
        <div className={`scroll-area ${className}`}>
            {children}
        </div>
    );
};

export default ScrollArea; // Make sure you are using default export
