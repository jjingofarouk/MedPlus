import React from 'react';

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="select">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
