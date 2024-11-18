import React from 'react';

const SelectField = ({ label, id, name, options }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select id={id} name={name}>
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default SelectField;
