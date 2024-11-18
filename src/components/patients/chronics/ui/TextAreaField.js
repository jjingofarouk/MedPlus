import React from 'react';

const TextAreaField = ({ label, id, name, placeholder }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea id={id} name={name} placeholder={placeholder} rows="3" style={{ width: '100%' }} />
  </div>
);

export default TextAreaField;
