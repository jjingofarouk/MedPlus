import React from 'react';

const Popover = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute bg-white shadow-lg p-4 rounded">
        {children}
      </div>
    </div>
  );
};

export default Popover;
