import React from 'react';

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-gray-700 font-semibold">
      {children}
    </label>
  );
};

export default Label;
