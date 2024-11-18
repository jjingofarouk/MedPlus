import React from 'react';

const Switch = ({ isChecked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
