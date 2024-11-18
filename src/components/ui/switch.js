import React from 'react';
import './Switch.css'; // Import the CSS for styling

const Switch = ({ isChecked, onChange }) => {
  return (
    <label className="ios-switch">
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={onChange} 
      />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
